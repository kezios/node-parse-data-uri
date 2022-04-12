import { MimeBuffer } from "data-uri-to-buffer";

export interface ParsedUri {
  mimeType: string;
  data: MimeBuffer;
}