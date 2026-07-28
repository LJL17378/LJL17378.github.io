import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "bilibili-user-card": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          endpoint?: string;
          "link-target"?: string;
          uid?: string;
        },
        HTMLElement
      >;
    }
  }
}
