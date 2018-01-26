import { HoverfocusDirective } from './hoverfocus.directive';
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { TestHoverFocusComponent } from "./test-hover-focus/test-hover-focus.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { } from "jasmine";

describe('HoverfocusDirective', () => {

  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoverfocusDirective, TestHoverFocusComponent]
    })

    fixture = TestBed.createComponent(TestHoverFocusComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('should create an instance', () => {
    const directive = new HoverfocusDirective();
    expect(directive).toBeTruthy();
  });

  it('hovering over input', () => {
    inputEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');

    inputEl.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');

  });
});
