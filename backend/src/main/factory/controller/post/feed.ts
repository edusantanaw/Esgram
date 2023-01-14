import { FeedController } from "../../../../controllers/posts/feed";
import { makeLoadPostUsecase } from "../../usecase/post/load";

export function makeFeedController() {
  const loadPostUsecase = makeLoadPostUsecase();
  return new FeedController(loadPostUsecase);
}
