import { Component } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";

export interface IFixtureComponent extends Component {
  [key: string]: any;
}

export const callTester = (
  fixture: ComponentFixture<IFixtureComponent>,
  selectorOrElement: string | HTMLElement,
  methodName: string,
  expector: any
): void => {
  const component: IFixtureComponent = fixture.componentInstance;

  spyOn(component, methodName);

  const element = typeof selectorOrElement === 'string'
    ? fixture.debugElement.nativeElement
      .querySelector(
        selectorOrElement
      )
    : selectorOrElement;
  element.click();
  fixture.detectChanges();

  expector(component[methodName]).toHaveBeenCalled();
//   fixture.whenStable().then( () => {
//   });
};

export const getElements = (
  fixture: ComponentFixture<IFixtureComponent>,
  selector: string,
): NodeListOf<HTMLElement> => {
  return (fixture.debugElement.nativeElement as HTMLElement).querySelectorAll(
    selector
  );
};
