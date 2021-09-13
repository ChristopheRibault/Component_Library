import { 
  Component,
  Host,
  h,
  Prop,
  State,
  Element,
  Event,
  EventEmitter,
  Listen
} from '@stencil/core';

@Component({
  tag: 'cr-dropdown',
  styleUrl: 'cr-dropdown.sass',
  shadow: true,
})
export class CrDropdown {
  @Element() element: HTMLElement;

  @Event() elementSelected: EventEmitter<number>;

  // Development purpose only
  @Listen('elementSelected')
  elementSelectedHandler(e: CustomEvent<number>): void {
    console.log(e.detail);
  }

  @Prop() title: string;
  @Prop() optionslist: string;
  @State() isExpanded = false;

  choices: NodeListOf<HTMLLIElement>;

  /**
   * Parse optionslist to get an array
   */
  get list(): Array<string> {
    return JSON.parse(this.optionslist);
  }

  componentDidUpdate(): void {
    this.choices = this.element.shadowRoot.querySelectorAll('li');
  }

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }

  select(index: number): void {
    this.choices.forEach(choice => {
      choice.removeAttribute('aria-selected');
    });
    this.choices[index].setAttribute('aria-selected', 'true');
    
    this.elementSelected.emit(index);
  }

  render(): void {
    return (
      <Host id="dd_wrapper">
        <button
          onClick={() => this.toggle()}
          aria-haspopup="listbox"
          aria-expanded={this.isExpanded.toString()}
        >{this.title}</button>
        {
          this.isExpanded &&
            <ul 
              id="dd_elem_list"
              tabindex="-1"
              role="listbox"
              aria-label={this.title}
            >
              {this.list.map((choice, i) => (
                <li
                  onClick={() => this.select(i)}
                  id={`choice_${i}`}
                  class='option'
                  role='option'
                >{choice}</li>
              ))}
            </ul>
          }

      </Host>
    );
  }

}
