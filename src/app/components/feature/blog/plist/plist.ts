import { Component } from '@angular/core';
import { BlogService } from '../../../../service/blog';

@Component({
  selector: 'app-plist',
  imports: [],
  templateUrl: './plist.html',
  styleUrl: './plist.css',
})
export class PlistBlogComponent {
  oPage: IPage<Blog> | null = null;

  constructor(private oBlogService: BlogService){}

  ngOnInit(): void {
    this.getPage();
  }

  getPage(){
    this.oBlogService.getPage(0,10).subscribe({
      next: (data:IPage<Blog>) => {
        console.log(data);
        this.oPage = data;
      },
      error: (error) => {
        console.error('Error fetching blog page:', error);
      }
    });
  }
}
