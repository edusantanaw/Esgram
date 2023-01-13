import { Post } from "@prisma/client";
import { dataPaginate } from "../../global/dataPaginate";
import { IPost } from "../../repository/post";

export interface ILoadPostUsecase {
    loadById: (id: string) => Promise<Post | null>;
    loadFeed: (data: dataPaginate) => Promise<IPost[] | null>;
    loadPerfil: (data: dataPaginate) => Promise<IPost[] | null>;
  }