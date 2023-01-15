import { Router } from "express";
import { verifyTokenExists } from "../middlewares/verifyToken";
import { uploadImages } from "../middlewares/multer";
import adapter from "../adapter/express-adapter";
import { makeAuthController } from "../factory/controller/auth/auth";
import { makeSignupController } from "../factory/controller/auth/signup";
import { makeLoadFollowingsController } from "../factory/controller/follow/loadFollowings";
import { makeLoadFollowersController } from "../factory/controller/follow/loadFollowes";
import { makeLoadUserByNameController } from "../factory/controller/user/loadByName";
import { makeLoadUseByIdController } from "../factory/controller/user/loadById";
import { makeAddFollowController } from "../factory/controller/follow/add";
import { makeUpdateUserController } from "../factory/controller/user/update";
import { makeUpdateUserPasswordController } from "../factory/controller/user/updatePassword";
import { makeLoadMessagesController } from "../factory/controller/chat/loadMessages";
import { makeLoadChatsController } from "../factory/controller/chat/loadChat";
import { makeLoadRoomController } from "../factory/controller/chat/loadRoom";
import { makeFeedController } from "../factory/controller/post/feed";
import { makeLoadPostPerfilController } from "../factory/controller/post/perfil";
import { makeLoadPostCommentsController } from "../factory/controller/comments/load";
import { makeLoadLikeUsecase } from "../factory/usecase/like/load";
import { makeLoadPostLikesController } from "../factory/controller/like/loadLike";
import { makeLoadPostByIdController } from "../factory/controller/post/loadById";
import { makeCreatePostController } from "../factory/controller/post/create";
import { makeAddLikeController } from "../factory/controller/like/add";
import { makeAddCommentController } from "../factory/controller/comments/add";
import { makeUpdatePostController } from "../factory/controller/post/update";
import { makeDeletePostController } from "../factory/controller/post/delete";
const router = Router();

router.post("/user", adapter(makeAuthController()));
router.post("/signin", adapter(makeSignupController()));

router.get(
  "/users/following/:id",
  verifyTokenExists,
  adapter(makeLoadFollowingsController())
);
router.get(
  "/users/followers/:id",
  verifyTokenExists,
  adapter(makeLoadFollowersController())
);
router.get(
  "/users/:name",
  verifyTokenExists,
  adapter(makeLoadUserByNameController())
);
router.get(
  "/users/perfil/:id",
  verifyTokenExists,
  adapter(makeLoadUseByIdController())
);

router.post(
  "/users/add/:id",
  verifyTokenExists,
  adapter(makeAddFollowController())
);
router.patch(
  "/users/update/:id",
  verifyTokenExists,
  uploadImages,
  adapter(makeUpdateUserController())
);
router.patch(
  "/users/password/:id",
  verifyTokenExists,
  adapter(makeUpdateUserPasswordController())
);

// chat
router.get(
  "/messages",
  verifyTokenExists,
  adapter(makeLoadMessagesController())
);
router.get(
  "/messages/:id",
  verifyTokenExists,
  adapter(makeLoadChatsController())
);
router.get("/room", verifyTokenExists, adapter(makeLoadRoomController()));

//posts routes
router.get("/posts/feed/:id", verifyTokenExists, adapter(makeFeedController()));
router.get(
  "/posts/user/:id",
  verifyTokenExists,
  adapter(makeLoadPostPerfilController())
);
router.get(
  "/posts/comments/:id",
  verifyTokenExists,
  adapter(makeLoadPostCommentsController())
);

router.get(
  "/posts/like/:id",
  verifyTokenExists,
  adapter(makeLoadPostLikesController())
);
router.get(
  "/posts/:id",
  verifyTokenExists,
  adapter(makeLoadPostByIdController())
);
router.post(
  "/posts",
  verifyTokenExists,
  uploadImages,
  adapter(makeCreatePostController())
);
router.post(
  "/posts/like/:post",
  verifyTokenExists,
  adapter(makeAddLikeController())
);
router.post(
  "/posts/comments/:id",
  verifyTokenExists,
  adapter(makeAddCommentController())
);
router.patch(
  "/posts/:id",
  verifyTokenExists,
  adapter(makeUpdatePostController())
);
router.delete(
  "/posts/:id",
  verifyTokenExists,
  adapter(makeDeletePostController())
);


export default router;
