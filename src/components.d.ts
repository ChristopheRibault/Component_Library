/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CrDropdown {
        "optionslist": string;
        "title": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLCrDropdownElement extends Components.CrDropdown, HTMLStencilElement {
    }
    var HTMLCrDropdownElement: {
        prototype: HTMLCrDropdownElement;
        new (): HTMLCrDropdownElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "cr-dropdown": HTMLCrDropdownElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface CrDropdown {
        "onElementSelected"?: (event: CustomEvent<number>) => void;
        "optionslist"?: string;
        "title"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "cr-dropdown": CrDropdown;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cr-dropdown": LocalJSX.CrDropdown & JSXBase.HTMLAttributes<HTMLCrDropdownElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
