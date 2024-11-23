import {UserDomain} from "./UserDomain";

/**
 * @template T para las respuestas
 */
export interface Message<T> {
  message?: T;
}
