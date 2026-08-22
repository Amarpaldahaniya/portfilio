import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiDevelopment } from './ai-development';

describe('AiDevelopment', () => {
  let component: AiDevelopment;
  let fixture: ComponentFixture<AiDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiDevelopment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiDevelopment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
