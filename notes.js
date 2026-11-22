/* session 40
1- Component LifeCycle
    that is the steps between component creation to component destroy

2-Constructor
Called when the component created , dont wait the data we will receive by parent or api
Used for dependency injection

3- ngOnInit()
Called once after the component be created , wait the data received

4- ngOnChanges()
Called whenever an @Input() changes
Runs before ngOnInit on the first change.
the problem: it cant notice if an ele in arr have been changed

5- ngDoCheck()
Called during every change in cycle.
it note any change happen such as ele in arr changed

6- ngAfterContentInit()
Called once after content is created
Related to ng-content

7- ngAfterContentChecked()
Called after content is checked
Can runs multiple times

8- viewChild => get the elemnts i have on his html such as #Test

9- contentChild => get the elements we will get in appHtml

10- ngAfterViewInit()
Called once after the component view and child views are created
used with ViewChild

11- ngAfterViewChecked()
Called after the component view and child views are change
Can runs multiple times.

12- ngOnDestroy()
Called just before the component is destroyed to stop all logic related to this component
Used in unsubscribing ??? in session 41

<!------------------------------------pipe--------------------------------------------->

13- pipe is used to to do some proccessing to databefore using it on template
it doesnt change the origin value
{{ value | pipeName }}

14- Build-in pipes
    name = 'basmala';
    {{ name | uppercase }}

15- uppercase	=> change the letters to capital

16- lowercase	=> change the letters to case

17- titleCase	=> change the letters to capitalize

18- date => prepare date

19- currency => prepare price

20- percent => take percent number and get the percentage

21- json => show data as json (stringify)

22- slice => must take star and end point

23- example on build-in pipes
{{ price | currency:'Euro' }},
{{ price | currency:'EGP' }},

24- {{ price | number:'1.2-2' }}

25- create pipe
in terminal: ng generate pipe pipes/posts

26- code:
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'posts',
})

export class postsPipe implements PipeTransform {

  transform(x: number , y:number): number {
    return x ** y;
  }

}

<!----------------------------------------------Services------------------------------------->
27- A Service is a class used to share data and logic between different components,or in API

28- create service
ng generate service services/product in terminal

29- we was use injectabke but after angular v22 we use @service

30- import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = ['Laptop', 'Mobile', 'Tablet'];

  getProducts() {
    return this.products;
  }

}
now we can inject this service in any component,service

31-posts.service.ts
 apiUrl="json://placeholder.typeCode.com/posts"
      async getData(){
        let res = await fh(this.iUrl),
        if(1res.ok){
        throw new Error (Error)
        }else{
         Data = await res.json();
         return data; 
          }
}

app.ts
    postsService = inject (PostsService);
    posts = signal<any>([]);
    async ngOnInit(){
      this.posts.set(await this.postService.getPosts())
    }


*/
