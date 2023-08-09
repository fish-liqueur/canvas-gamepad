import Button from "@entities/button";
import autobind from "@shared/lib/autobind";
import renderGamepad from "./render-gamepad";
import { ButtonDefinitionRadial, ButtonDefinitionCorner, ButtonStyleKit } from "@entities/button";

export interface CanvasGamepadOptions {
    buttons: (ButtonDefinitionCorner | ButtonDefinitionRadial)[];
    style: ButtonStyleKit;
}

export default class Gamepad {
    rootElement: HTMLDivElement;
    canvasSide: number;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    buttons: Button[] = [];
    buttonsActive: Button[] = [];
    // buttonsData: ButtonOptions[];

    callback: (key: string) => void;

    private options: CanvasGamepadOptions;


    constructor(rootId: string, callback: () => void, options: CanvasGamepadOptions) {
        this.options = options;
        this.rootElement = document.getElementById(rootId)! as HTMLDivElement;
        this.canvasSide = this.rootElement.offsetWidth > this.rootElement.offsetHeight ? this.rootElement.offsetHeight : this.rootElement.offsetWidth;
        // this.buttonsData = buttons.map(el => ({...el, canvasSide: this.canvasSide }));
        this.canvas = document.createElement('canvas') as HTMLCanvasElement;
        this.canvas.width = this.canvasSide;
        this.canvas.height = this.canvasSide;
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.rootElement.appendChild(this.canvas);
        this.callback = callback;
 
        // this.buttons = this.renderButtons(this.options);



        const material_font = new FontFace( 'material-icons',
            // pass the url to the file in CSS url() notation
            'url(https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2)' );
        document.fonts.add( material_font ); // add it to the document's FontFaceSet
        material_font.load().then( () => {
            // we're good to use it
                   
            this.buttons = this.renderButtons(options);
            this.canvas.addEventListener('touchstart', this.handleActive);
            this.canvas.addEventListener('touchend', this.handleInactive);
        }).catch( console.error );
    }

    private clearView() {
        this.context.clearRect(0, 0, this.canvasSide, this.canvasSide);
    }

    private renderButtons(options: CanvasGamepadOptions): Button[] {
        const { buttons, style } = options;
        const buttonsRendered: Button[] = [];
        for (const button of buttons) {
            buttons.push( new Button(button, this.context, style, this.canvasSide));
        }
        return buttonsRendered;
    }

    @autobind
    private handleActive(event: MouseEvent | TouchEvent) {
        console.log('handleActive ', this.getBtnKey, this);
        const button = this.getBtnKey(event);
        if (button) {
            button.applyStyle('active');
            this.buttonActive = button;
            this.callback(button.key);
        }
    }

    @autobind
    private handleInactive(event: MouseEvent | TouchEvent) {
        let button: Button | null;
        console.log('handleInactive 0 ', JSON.parse(JSON.stringify(this.buttonActive)));
        button = this.buttonActive || this.getBtnKey(event);

        console.log('handleInactive ', button, this.getBtnKey(event));

        if (button) {
            this.buttons = [];
            this.clearView();
            this.buttons = this.renderButtons(this.buttonsData);

        }
    }


    private getBtnKey(event: MouseEvent | TouchEvent) {
        if (event instanceof TouchEvent) {
            console.log('getBtnKey 111 ', event);
        }
        const x = event instanceof MouseEvent ? event.offsetX : event.touches[0]?.clientX - this.canvas.getBoundingClientRect().left || event.changedTouches[0]?.clientX - this.canvas.getBoundingClientRect().left;
        const y = event instanceof MouseEvent ? event.offsetY : event.touches[0]?.clientY - this.canvas.getBoundingClientRect().top || event.changedTouches[0]?.clientY - this.canvas.getBoundingClientRect().left;
        console.log('getBtnKey ', event, x, y, this.canvas);
        return this.buttons.reduce((result: null | Button, button: Button): Button | null => {
            if (button.path && this.context.isPointInPath(button.path, x, y)) {
                result = button;
                console.log('found!');
            }
            console.log('getBtnKey re ',event.type, result, button.path );
            return result;
        }, null)
    }

    // private getButtonStyle() {
    //
    // }
}