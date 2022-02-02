var AgGridModule_1;
import { __decorate } from "tslib";
import { ANALYZE_FOR_ENTRY_COMPONENTS, NgModule } from '@angular/core';
import { AgGridAngular } from './ag-grid-angular.component';
import { AgGridColumn } from './ag-grid-column.component';
let AgGridModule = AgGridModule_1 = class AgGridModule {
    /**
     * If you are using Angular v9+, with Ivy enabled, you **do not** need to pass your components to the `AgGridModules` via this method.
     * They will automatically be resolved by Angular.
    */
    static withComponents(components) {
        return {
            ngModule: AgGridModule_1,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ],
        };
    }
    /**
     * If you are using Angular v9+, with Ivy enabled, you **do not** need to pass your components to the `AgGridModules` via this method.
     * They will automatically be resolved by Angular.
    */
    static forRoot(components) {
        return {
            ngModule: AgGridModule_1,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ],
        };
    }
};
AgGridModule = AgGridModule_1 = __decorate([
    NgModule({
        declarations: [AgGridAngular, AgGridColumn],
        imports: [],
        exports: [AgGridAngular, AgGridColumn]
    })
], AgGridModule);
export { AgGridModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWctZ3JpZC1hbmd1bGFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZy1ncmlkLWNvbW11bml0eS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2FnLWdyaWQtYW5ndWxhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsNEJBQTRCLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBTzFELElBQWEsWUFBWSxvQkFBekIsTUFBYSxZQUFZO0lBRXJCOzs7TUFHRTtJQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBZ0I7UUFDbEMsT0FBTztZQUNILFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7YUFDL0U7U0FDSixDQUFDO0lBQ04sQ0FBQztJQUVEOzs7TUFHRTtJQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBZ0I7UUFDM0IsT0FBTztZQUNILFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7YUFDL0U7U0FDSixDQUFDO0lBQ04sQ0FBQztDQUVKLENBQUE7QUE1QlksWUFBWTtJQUx4QixRQUFRLENBQUM7UUFDTixZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDO1FBQzNDLE9BQU8sRUFBRSxFQUFFO1FBQ1gsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQztLQUN6QyxDQUFDO0dBQ1csWUFBWSxDQTRCeEI7U0E1QlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnR3JpZEFuZ3VsYXIgfSBmcm9tICcuL2FnLWdyaWQtYW5ndWxhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWdHcmlkQ29sdW1uIH0gZnJvbSAnLi9hZy1ncmlkLWNvbHVtbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0FnR3JpZEFuZ3VsYXIsIEFnR3JpZENvbHVtbl0sXG4gICAgaW1wb3J0czogW10sXG4gICAgZXhwb3J0czogW0FnR3JpZEFuZ3VsYXIsIEFnR3JpZENvbHVtbl1cbn0pXG5leHBvcnQgY2xhc3MgQWdHcmlkTW9kdWxlIHtcblxuICAgIC8qKiBcbiAgICAgKiBJZiB5b3UgYXJlIHVzaW5nIEFuZ3VsYXIgdjkrLCB3aXRoIEl2eSBlbmFibGVkLCB5b3UgKipkbyBub3QqKiBuZWVkIHRvIHBhc3MgeW91ciBjb21wb25lbnRzIHRvIHRoZSBgQWdHcmlkTW9kdWxlc2AgdmlhIHRoaXMgbWV0aG9kLiBcbiAgICAgKiBUaGV5IHdpbGwgYXV0b21hdGljYWxseSBiZSByZXNvbHZlZCBieSBBbmd1bGFyLlxuICAgICovXG4gICAgc3RhdGljIHdpdGhDb21wb25lbnRzKGNvbXBvbmVudHM/OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPGFueT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEFnR3JpZE1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUywgdXNlVmFsdWU6IGNvbXBvbmVudHMsIG11bHRpOiB0cnVlIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIElmIHlvdSBhcmUgdXNpbmcgQW5ndWxhciB2OSssIHdpdGggSXZ5IGVuYWJsZWQsIHlvdSAqKmRvIG5vdCoqIG5lZWQgdG8gcGFzcyB5b3VyIGNvbXBvbmVudHMgdG8gdGhlIGBBZ0dyaWRNb2R1bGVzYCB2aWEgdGhpcyBtZXRob2QuIFxuICAgICAqIFRoZXkgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHJlc29sdmVkIGJ5IEFuZ3VsYXIuXG4gICAgKi9cbiAgICBzdGF0aWMgZm9yUm9vdChjb21wb25lbnRzPzogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVyczxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBBZ0dyaWRNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMsIHVzZVZhbHVlOiBjb21wb25lbnRzLCBtdWx0aTogdHJ1ZSB9XG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgIH1cblxufVxuIl19