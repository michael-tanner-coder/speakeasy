import { atom } from "recoil";

export const userState = atom({ key: "userState", default: {} });
export const chatRooms = atom({ key: "chatRooms", default: [] });
