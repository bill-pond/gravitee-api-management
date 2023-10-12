import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'api-documentation-visibility',
  template: require('./api-documentation-v4-visibility.component.html'),
  styles: [require('./api-documentation-v4-visibility.component.scss')],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ApiDocumentationV4VisibilityComponent),
      multi: true,
    },
  ],
})
export class ApiDocumentationV4VisibilityComponent implements ControlValueAccessor {
  _value: string;
  protected _onChange: (_selection: 'PUBLIC' | 'PRIVATE') => void = () => ({});

  protected _onTouched: () => void = () => ({});

  // From ControlValueAccessor interface
  public registerOnChange(fn: (selection: 'PUBLIC' | 'PRIVATE') => void): void {
    this._onChange = fn;
  }

  // From ControlValueAccessor interface
  public registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  writeValue(selection: 'PUBLIC' | 'PRIVATE'): void {
    this._value = selection;
  }
}
