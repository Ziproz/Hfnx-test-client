import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedRepositoriesComponent } from './bookmarked-repositories.component';

describe('BookmarkedRepositoriesComponent', () => {
  let component: BookmarkedRepositoriesComponent;
  let fixture: ComponentFixture<BookmarkedRepositoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarkedRepositoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookmarkedRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
