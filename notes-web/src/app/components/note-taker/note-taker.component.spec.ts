import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTakerComponent } from './note-taker.component';

describe('NoteTakerComponent', () => {
  let component: NoteTakerComponent;
  let fixture: ComponentFixture<NoteTakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteTakerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoteTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
