import { PerfilPostsCotroller } from "../../../../controllers/posts/perfil";
import { makeLoadPostUsecase } from "../../usecase/post/load";

export function makeLoadPostPerfilController() {
  const loadPostUsecase = makeLoadPostUsecase();
  return new PerfilPostsCotroller(loadPostUsecase);
}
