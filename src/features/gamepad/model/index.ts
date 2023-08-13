import Button from "@entities/button";
import autobind from "@shared/lib/autobind";
import getButtonByEvent from "./get-button-by-event";
import renderButtons from "./render-buttons";
import { ButtonStyleKit } from "@entities/button";

export default class Gamepad {
    canvasSide: number;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    buttons: Button[] = [];
    buttonActive: Button | null = null;

    callback: (key: string) => void;

    private options: ButtonStyleKit;


    constructor(rootElement: HTMLDivElement, callback: (key: string) => void, options: ButtonStyleKit) {
        this.options = options;
        this.canvasSide = rootElement.offsetWidth > rootElement.offsetHeight ? rootElement.offsetHeight : rootElement.offsetWidth;
        this.canvas = document.createElement('canvas') as HTMLCanvasElement;
        this.canvas.width = this.canvasSide;
        this.canvas.height = this.canvasSide;
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        rootElement.appendChild(this.canvas);
        this.callback = callback;

        const material_font = new FontFace('material-icons',
            // pass the url to the file in CSS url() notation
            'url(https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2)');
        document.fonts.add(material_font); // add it to the document's FontFaceSet
        material_font.load().then(() => {
            // we're good to use it

            let isActiveEventHandlerRunning = false;
            const debounceInterval = 150; 

            const handleActiveDebounced = (event: MouseEvent | TouchEvent) => {
                if (!isActiveEventHandlerRunning) {
                    isActiveEventHandlerRunning = true;
                    this.handleActive(event);
                    setTimeout(() => {
                        isActiveEventHandlerRunning = false;
                    }, debounceInterval);
                  }
            };

            this.canvas.addEventListener('touchstart',handleActiveDebounced);
            this.canvas.addEventListener('mousedown', handleActiveDebounced);
            this.canvas.addEventListener('touchend', this.handleInactive);
            this.canvas.addEventListener('mouseup', this.handleInactive);

            this.buttons = renderButtons(options, this.context, this.canvasSide);
        }).catch(console.error);
    }

    private clearView() {
        this.context.clearRect(0, 0, this.canvasSide, this.canvasSide);
    }

    @autobind
    private handleActive(event: MouseEvent | TouchEvent) {
        const button = getButtonByEvent(event, this.canvas, this.context, this.buttons);

        if (button) {
            this.buttonActive = button;
            this.clearView();
            this.buttons = renderButtons(this.options, this.context, this.canvasSide, button);
            this.callback(button.key);
        }
    }

    @autobind
    private handleInactive(event: MouseEvent | TouchEvent) {
        const button = this.buttonActive || getButtonByEvent(event, this.canvas, this.context, this.buttons);

        if (button) {
            this.buttonActive = null;
            this.buttons = [];
            this.clearView();
            this.buttons = renderButtons(this.options, this.context, this.canvasSide);
        }
    }
}