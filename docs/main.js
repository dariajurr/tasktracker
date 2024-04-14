"use strict";
(self["webpackChunktasktracker"] = self["webpackChunktasktracker"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/main-layout/main-layout.component */ 6519);
/* harmony import */ var _pages_tasks_page_tasks_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/tasks-page/tasks-page.component */ 2745);
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ 2191);
/* harmony import */ var _pages_task_detail_page_task_detail_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/task-detail-page/task-detail-page.component */ 327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







const routes = [{
  path: '',
  component: _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainLayoutComponent,
  children: [{
    path: '',
    component: _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__.MainPageComponent
  }, {
    path: 'tasks',
    component: _pages_tasks_page_tasks_page_component__WEBPACK_IMPORTED_MODULE_1__.TasksPageComponent
  }, {
    path: 'task/:id',
    component: _pages_task_detail_page_task_detail_page_component__WEBPACK_IMPORTED_MODULE_3__.TaskDetailPageComponent
  }, {
    path: 'task/new',
    component: _pages_task_detail_page_task_detail_page_component__WEBPACK_IMPORTED_MODULE_3__.TaskDetailPageComponent
  }]
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class AppComponent {
  constructor() {
    this.title = 'tasktracker';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations/async */ 6970);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-in-memory-web-api */ 2387);
/* harmony import */ var src_core_services_in_memory_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/core/services/in-memory-storage.service */ 8357);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);













class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    providers: [(0,_angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_4__.provideAnimationsAsync)(), {
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_LOCALE,
      useValue: 'ru-RU'
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_8__.HttpClientInMemoryWebApiModule.forRoot(src_core_services_in_memory_storage_service__WEBPACK_IMPORTED_MODULE_2__.InMemoryStorageService), _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_8__.HttpClientInMemoryWebApiModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule]
  });
})();

/***/ }),

/***/ 2833:
/*!*************************************************************!*\
  !*** ./src/app/components/task-form/task-form.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskFormComponent: () => (/* binding */ TaskFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ 3804);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var src_core_interfaces_priority_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/core/interfaces/priority.interface */ 5552);
/* harmony import */ var src_core_interfaces_status_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/core/interfaces/status.interface */ 7246);
/* harmony import */ var src_core_dto_create_task_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/core/dto/create-task.transformer */ 173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_core_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/core/services/task.service */ 8453);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);























function TaskFormComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", state_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](state_r2.name);
  }
}
function TaskFormComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const state_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", state_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](state_r3.name);
  }
}
function TaskFormComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r3.taskForm.invalid);
  }
}
function TaskFormComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskFormComponent_Conditional_46_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.editTask());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r3.taskForm.invalid);
  }
}
class TaskFormComponent {
  constructor(_fb, _taskService, _router) {
    this._fb = _fb;
    this._taskService = _taskService;
    this._router = _router;
    this.taskData = null;
    this.updateMode = false;
    this.editMode = false;
    this.taskForm = this._fb.group({
      title: this._fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      description: this._fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      deadline: this._fb.control(new Date(new Date().setHours(0, 0, 0, 0)), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      priority: this._fb.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      status: this._fb.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      performer: this._fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
    });
    this.statuses = src_core_interfaces_status_interface__WEBPACK_IMPORTED_MODULE_1__.STATUSES;
    this.priorities = src_core_interfaces_priority_interface__WEBPACK_IMPORTED_MODULE_0__.PRIORITIES;
  }
  ngOnInit() {
    if (!this.id) this.editMode = true;
    if (!this.editMode) this.taskForm.disable();
    if (this.taskData) this.taskForm.patchValue(this.taskData);
  }
  editTask() {
    this.updateMode = true;
    this.taskForm.controls.status.enable();
    this.taskForm.controls.performer.enable();
  }
  onSubmit() {
    if (this.updateMode) {}
    this._getFormAction;
    if (this.updateMode) {
      this._taskService.updateTask((0,src_core_dto_create_task_transformer__WEBPACK_IMPORTED_MODULE_2__.createTaskBodyDTO)(this.taskForm.controls, this.id)).subscribe({
        next: () => {
          this.taskForm.reset();
          this._router.navigate(['/', 'tasks']);
        },
        error: err => {
          console.error(err);
        }
      });
    } else {
      this._taskService.createTask((0,src_core_dto_create_task_transformer__WEBPACK_IMPORTED_MODULE_2__.createTaskBodyDTO)(this.taskForm.controls)).subscribe({
        next: () => {
          this.taskForm.reset();
          this._router.navigate(['/', 'tasks']);
        },
        error: err => {
          console.error(err);
        }
      });
    }
  }
  _getFormAction() {
    if (this.updateMode) {
      return this._taskService.createTask((0,src_core_dto_create_task_transformer__WEBPACK_IMPORTED_MODULE_2__.createTaskBodyDTO)(this.taskForm.controls));
    } else {
      return this._taskService.updateTask((0,src_core_dto_create_task_transformer__WEBPACK_IMPORTED_MODULE_2__.createTaskBodyDTO)(this.taskForm.controls));
    }
  }
  static #_ = this.ɵfac = function TaskFormComponent_Factory(t) {
    return new (t || TaskFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NonNullableFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_core_services_task_service__WEBPACK_IMPORTED_MODULE_3__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: TaskFormComponent,
    selectors: [["app-task-form"]],
    inputs: {
      id: "id",
      taskData: "taskData"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
      provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        floatLabel: 'auto'
      }
    }, (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_8__.provideNativeDateAdapter)()]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 47,
    vars: 10,
    consts: [["picker", ""], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "shipping-card"], [1, "row"], [1, "col"], [1, "full-width"], ["matInput", "", 3, "formControl"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matIconSuffix", "", 3, "for"], [3, "formControl"], [3, "value"], ["mat-stroked-button", "", "color", "primary", "type", "submit", 1, "send-btn", 3, "disabled"], ["mat-stroked-button", "", "color", "primary", 1, "send-btn", 3, "click", "disabled"]],
    template: function TaskFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function TaskFormComponent_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onSubmit());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card", 2)(2, "mat-card-content")(3, "div", 3)(4, "div", 4)(5, "mat-form-field", 5)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 3)(10, "div", 4)(11, "mat-form-field", 5)(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 3)(16, "div", 4)(17, "mat-form-field", 5)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\u0414\u0435\u0434\u043B\u0430\u0439\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 7)(21, "mat-datepicker-toggle", 8)(22, "mat-datepicker", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 4)(25, "mat-form-field", 5)(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](29, TaskFormComponent_For_30_Template, 2, 2, "mat-option", 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 3)(32, "div", 4)(33, "mat-form-field", 5)(34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\u0421\u0442\u0430\u0442\u0443\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](37, TaskFormComponent_For_38_Template, 2, 2, "mat-option", 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 4)(40, "mat-form-field", 5)(41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, TaskFormComponent_Conditional_45_Template, 2, 1, "button", 11)(46, TaskFormComponent_Conditional_46_Template, 2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const picker_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.taskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.taskForm.controls.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.taskForm.controls.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", picker_r6)("formControl", ctx.taskForm.controls.deadline);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", picker_r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.taskForm.controls.priority);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.priorities);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.taskForm.controls.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.statuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.taskForm.controls.performer);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](45, ctx.editMode || ctx.updateMode ? 45 : 46);
      }
    },
    dependencies: [_angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerToggle],
    styles: [".full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.shipping-card[_ngcontent-%COMP%] {\n  min-width: 120px;\n  margin: 20px auto;\n}\n\n.mat-radio-button[_ngcontent-%COMP%] {\n  display: block;\n  margin: 5px 0;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.col[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.col[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.send-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90YXNrLWZvcm0vdGFzay1mb3JtLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vJUQxJTgzJUQxJTg3JUQwJUI1JUQwJUIxJUQwJUIwLyVEMSU4MiVEMCVCNSVEMSU4MSVEMSU4MiVEMCVCRSVEMCVCMiVEMSU4QiVEMCVCNS90YXNrdHJhY2tlci9zcmMvYXBwL2NvbXBvbmVudHMvdGFzay1mb3JtL3Rhc2stZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNoaXBwaW5nLWNhcmQge1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5jb2wge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY29sOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLnNlbmQtYnRuIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufSIsIi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaGlwcGluZy1jYXJkIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY29sIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY29sOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5zZW5kLWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 169:
/*!*****************************************************************!*\
  !*** ./src/app/components/tasks-table/tasks-table.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksTableComponent: () => (/* binding */ TasksTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var src_core_pipes_get_display_column_name_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/core/pipes/get-display-column-name.pipe */ 433);
/* harmony import */ var src_core_pipes_get_display_name_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/core/pipes/get-display-name.pipe */ 9119);
/* harmony import */ var src_core_pipes_get_filter_display_name_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/core/pipes/get-filter-display-name.pipe */ 7468);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_core_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/core/services/task.service */ 8453);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 4950);

























const _c0 = a0 => ["/", "task", a0];
function TasksTableComponent_For_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "getFilterDisplayName");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const op_r5 = ctx.$implicit;
    const filter_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", op_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 2, op_r5, filter_r3), " ");
  }
}
function TasksTableComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 1)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "getDisplayColumnName");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function TasksTableComponent_For_1_Template_mat_select_valueChange_4_listener($event) {
      const filter_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](filter_r3.defaultValue, $event) || (filter_r3.defaultValue = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectionChange", function TasksTableComponent_For_1_Template_mat_select_selectionChange_4_listener($event) {
      const filter_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.applyTasksFilter($event, filter_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](5, TasksTableComponent_For_1_For_6_Template, 3, 5, "mat-option", 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const filter_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, filter_r3.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", filter_r3.defaultValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](filter_r3.options);
  }
}
function TasksTableComponent_For_11_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "getDisplayColumnName");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, column_r6), " ");
  }
}
function TasksTableComponent_For_11_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "getDisplayName");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r7 = ctx.$implicit;
    const column_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, task_r7[column_r6], column_r6), " ");
  }
}
function TasksTableComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TasksTableComponent_For_11_th_1_Template, 3, 3, "th", 11)(2, TasksTableComponent_For_11_td_2_Template, 3, 4, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matColumnDef", column_r6);
  }
}
function TasksTableComponent_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 15);
  }
}
function TasksTableComponent_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 16);
  }
  if (rf & 2) {
    const task_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c0, task_r8.id));
  }
}
function TasksTableComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u0417\u0430\u0434\u0430\u0447 \u043D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function TasksTableComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class TasksTableComponent {
  constructor(_taskService) {
    this._taskService = _taskService;
    this.displayedColumns = ['title', 'deadline', 'priority', 'status', 'performer'];
    this.isLoading = true;
    this.tableData = [];
    this.taskTableFilters = [];
    this.dataSourceFilters = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.tableData);
    this._status = [];
    this._performer = [];
    this._defaultValue = 'All';
    this._filterDictionary = new Map();
    this._dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.tableData);
  }
  ngOnInit() {
    this._detTableData();
  }
  ngAfterViewInit() {
    this._dataSource.sort = this.sort;
  }
  applyTasksFilter(ob, tasksfilter) {
    if (tasksfilter) {
      this._filterDictionary.set(tasksfilter.name, ob.value);
    } else {
      this._filterDictionary.set('deadline', ob.value.toISOString());
    }
    this.dataSourceFilters.filter = JSON.stringify(Array.from(this._filterDictionary.entries()));
  }
  _getUniqueValue(array) {
    return Array.from(new Set(array));
  }
  _getFilterValue(array, nameOfFilter) {
    return ['All', ...this._getUniqueValue(array.map(taskItem => taskItem[nameOfFilter]))];
  }
  _setFiltersValue() {
    this.taskTableFilters.push({
      name: 'status',
      options: this._status,
      defaultValue: this._defaultValue
    });
    this.taskTableFilters.push({
      name: 'performer',
      options: this._performer,
      defaultValue: this._defaultValue
    });
  }
  _setFilters() {
    this._setFiltersValue();
    this.dataSourceFilters.filterPredicate = function (record, filter) {
      const map = new Map(JSON.parse(filter));
      let isMatch = false;
      for (let [key, value] of map) {
        isMatch = value == 'All' || record[key] == value;
        if (!isMatch) return false;
      }
      return isMatch;
    };
  }
  _detTableData() {
    this._taskService.getTasks().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(res => {
      this._status = this._getFilterValue(res, 'status');
      this._performer = this._getFilterValue(res, 'performer');
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this.isLoading = false)).subscribe(res => {
      this.tableData = res;
      this._dataSource.data = res;
      this.dataSourceFilters = this._dataSource;
      this._setFilters();
    });
  }
  static #_ = this.ɵfac = function TasksTableComponent_Factory(t) {
    return new (t || TasksTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_core_services_task_service__WEBPACK_IMPORTED_MODULE_3__.TaskService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: TasksTableComponent,
    selectors: [["app-tasks-table"]],
    viewQuery: function TasksTableComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_10__.provideNativeDateAdapter)()]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 16,
    vars: 7,
    consts: [["picker", ""], ["appearance", "fill"], ["matInput", "", 3, "dateChange", "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "routerLink", 4, "matRowDef", "matRowDefColumns"], [1, "loader"], [3, "valueChange", "selectionChange", "value"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "routerLink"]],
    template: function TasksTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](0, TasksTableComponent_For_1_Template, 7, 4, "mat-form-field", 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-form-field")(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u0414\u0435\u0434\u043B\u0430\u0439\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dateChange", function TasksTableComponent_Template_input_dateChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.applyTasksFilter($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "mat-datepicker-toggle", 3)(7, "mat-datepicker", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](10, TasksTableComponent_For_11_Template, 3, 1, "ng-container", 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, TasksTableComponent_tr_12_Template, 1, 0, "tr", 6)(13, TasksTableComponent_tr_13_Template, 1, 3, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, TasksTableComponent_Conditional_14_Template, 2, 0, "p")(15, TasksTableComponent_Conditional_15_Template, 2, 0, "div", 8);
      }
      if (rf & 2) {
        const picker_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.taskTableFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", picker_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", picker_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSourceFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](14, !ctx.tableData.length && !ctx.isLoading ? 14 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](15, ctx.isLoading ? 15 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, src_core_pipes_get_display_name_pipe__WEBPACK_IMPORTED_MODULE_1__.GetDisplayNamePipe, src_core_pipes_get_display_column_name_pipe__WEBPACK_IMPORTED_MODULE_0__.GetDisplayColumnNamePipe, src_core_pipes_get_filter_display_name_pipe__WEBPACK_IMPORTED_MODULE_2__.GetFilterDisplayNamePipe, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinner, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle],
    styles: [".full-width-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.mat-mdc-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.loader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90YXNrcy10YWJsZS90YXNrcy10YWJsZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLyVEMSU4MyVEMSU4NyVEMCVCNSVEMCVCMSVEMCVCMC8lRDElODIlRDAlQjUlRDElODElRDElODIlRDAlQkUlRDAlQjIlRDElOEIlRDAlQjUvdGFza3RyYWNrZXIvc3JjL2FwcC9jb21wb25lbnRzL3Rhc2tzLXRhYmxlL3Rhc2tzLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ci5tYXQtbWRjLXJvdyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn0iLCIuZnVsbC13aWR0aC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ci5tYXQtbWRjLXJvdyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6519:
/*!*************************************************************!*\
  !*** ./src/app/layout/main-layout/main-layout.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainLayoutComponent: () => (/* binding */ MainLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


















const _c0 = () => ({
  exact: true
});
const _c1 = () => ["/"];
const _c2 = () => ["/", "tasks"];
class MainLayoutComponent {
  constructor() {
    this.opened = true;
  }
  static #_ = this.ɵfac = function MainLayoutComponent_Factory(t) {
    return new (t || MainLayoutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MainLayoutComponent,
    selectors: [["app-main-layout"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 21,
    vars: 9,
    consts: [["sidenav", ""], ["mat-icon-button", "", 3, "click"], [1, "main-layout__container"], ["mode", "side", 3, "openedChange", "opened"], ["routerLinkActive", "active-link", 1, "nav-link", 3, "routerLinkActiveOptions", "routerLink"]],
    template: function MainLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "mat-toolbar")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const sidenav_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](sidenav_r2.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-sidenav-container", 2)(6, "mat-sidenav", 3, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("openedChange", function MainLayoutComponent_Template_mat_sidenav_openedChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.opened, $event) || (ctx.opened = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list")(9, "mat-list-item")(10, "a", 4)(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-list-item")(15, "a", 4)(16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0417\u0430\u0434\u0430\u0447\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("opened", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatSidenavContent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckboxModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListItem, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDividerModule],
    styles: [".main-layout__container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 64px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\nmat-sidenav.mat-drawer-opened[_ngcontent-%COMP%] {\n  width: 240px;\n  min-width: 240px;\n  max-width: 240px;\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: unset;\n  text-decoration: none;\n}\n\n.active-link[_ngcontent-%COMP%] {\n  color: var(--mat-stepper-header-selected-state-icon-background-color);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L21haW4tbGF5b3V0L21haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vJUQxJTgzJUQxJTg3JUQwJUI1JUQwJUIxJUQwJUIwLyVEMSU4MiVEMCVCNSVEMSU4MSVEMSU4MiVEMCVCRSVEMCVCMiVEMSU4QiVEMCVCNS90YXNrdHJhY2tlci9zcmMvYXBwL2xheW91dC9tYWluLWxheW91dC9tYWluLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0FSOztBRElBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQ0RKOztBRElBO0VBQ0kscUVBQUE7QUNESiIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWxheW91dCB7XHJcbiAgICAmX19jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDY0cHg7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2Lm1hdC1kcmF3ZXItb3BlbmVkIHtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIG1pbi13aWR0aDogMjQwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI0MHB4O1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogdW5zZXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5hY3RpdmUtbGluayB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWF0LXN0ZXBwZXItaGVhZGVyLXNlbGVjdGVkLXN0YXRlLWljb24tYmFja2dyb3VuZC1jb2xvcik7XHJcbn1cclxuIiwiLm1haW4tbGF5b3V0X19jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjRweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxubWF0LXNpZGVuYXYubWF0LWRyYXdlci1vcGVuZWQge1xuICB3aWR0aDogMjQwcHg7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIG1heC13aWR0aDogMjQwcHg7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubmF2LWxpbmsge1xuICBjb2xvcjogdW5zZXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmFjdGl2ZS1saW5rIHtcbiAgY29sb3I6IHZhcigtLW1hdC1zdGVwcGVyLWhlYWRlci1zZWxlY3RlZC1zdGF0ZS1pY29uLWJhY2tncm91bmQtY29sb3IpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2191:
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class MainPageComponent {
  static #_ = this.ɵfac = function MainPageComponent_Factory(t) {
    return new (t || MainPageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MainPageComponent,
    selectors: [["app-main-page"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 33,
    vars: 0,
    template: function MainPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main")(1, "H1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0422\u0435\u0441\u0442\u043E\u0432\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0414\u0430\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u043C \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u0434\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0438\u043D\u0438-\u0442\u0430\u0441\u043A\u0442\u0440\u0435\u043A\u043A\u0435\u0440 (\u043F\u043E \u0442\u0438\u043F\u0443 Asana, \u043C\u043E\u0436\u043D\u043E \u0431\u0440\u0430\u0442\u044C \u0435\u0451 \u0432 \u043F\u0440\u0438\u043C\u0435\u0440). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u0421\u0442\u0435\u043A: Angular (\u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438), Angular Material, SCSS/SASS/LESS, TypeScript, RxJs, \u043F\u043E \u0436\u0435\u043B\u0430\u043D\u0438\u044E NgRx. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0412 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul")(14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438 (\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A, \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435, \u0434\u0435\u0434\u043B\u0430\u0439\u043D, \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442, \u0441\u0442\u0430\u0442\u0443\u0441, \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0438); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447 (\u0441\u0442\u0430\u0442\u0443\u0441, \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0438);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0437\u0430\u0434\u0430\u0447 \u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u043D\u0430 \u043D\u0435\u0451;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u0437\u0430\u0434\u0430\u0447\u0430\u043C\u0438 + \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F \u0438 \u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0437\u0430\u0434\u0430\u0447 \u043F\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0430\u043C, \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E \u0438 \u0434\u0430\u0442\u0435 \u0434\u0435\u0434\u043B\u0430\u0439\u043D\u0430; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0432\u0441\u0435\u0445 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0432 localStorage;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0414\u043E\u043F \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B, \u043D\u043E \u0436\u0435\u043B\u0430\u0442\u0435\u043B\u044C\u043D\u044B):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul")(27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C TypeScript (\u0432\u0435\u0437\u0434\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0443\u043A\u0430\u0437\u0430\u043D\u044B \u0442\u0438\u043F\u044B, \u0435\u043D\u0430\u043C\u044B, \u043A\u0430\u0441\u0442\u043E\u043C\u043D\u044B\u0435 \u0442\u0438\u043F\u044B/\u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B, utility types \u0438 \u0442.\u0434.); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u0430\u043D\u0433\u0443\u043B\u044F\u0440\u0430 \u0438 \u0435\u0433\u043E \u043D\u043E\u0432\u044B\u0435 \u0444\u0438\u0447\u0438;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u0438\u043C\u0438\u0442\u0430\u0446\u0438\u044E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 angular-\u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432 \u0438 NgRx (\u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C localStorage); ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 327:
/*!**********************************************************************!*\
  !*** ./src/app/pages/task-detail-page/task-detail-page.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskDetailPageComponent: () => (/* binding */ TaskDetailPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_components_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/task-form/task-form.component */ 2833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_core_services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/core/services/task.service */ 8453);











const _c0 = () => ["/", "tasks"];
function TaskDetailPageComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u0417\u0430\u0434\u0430\u0447\u0430 \u2116", ctx_r0.id, " ");
  }
}
function TaskDetailPageComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " \u041D\u043E\u0432\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430 ");
  }
}
function TaskDetailPageComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-task-form", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r0.id)("taskData", ctx_r0.data);
  }
}
function TaskDetailPageComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class TaskDetailPageComponent {
  constructor(_activatedRoute, _taskService) {
    this._activatedRoute = _activatedRoute;
    this._taskService = _taskService;
    this.data = null;
    this._activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
  }
  ngOnInit() {
    if (this.id) {
      this._taskService.getTaskById(this.id).subscribe(taskData => {
        this.data = taskData || null;
      });
    }
  }
  static #_ = this.ɵfac = function TaskDetailPageComponent_Factory(t) {
    return new (t || TaskDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_core_services_task_service__WEBPACK_IMPORTED_MODULE_1__.TaskService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TaskDetailPageComponent,
    selectors: [["app-task-detail-page"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 4,
    consts: [[1, "task-deatail__header"], ["mat-icon-button", "", 3, "routerLink"], [1, "task-deatail__title"], [3, "id", "taskData"], [1, "loader"]],
    template: function TaskDetailPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main")(1, "div", 0)(2, "button", 1)(3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TaskDetailPageComponent_Conditional_6_Template, 1, 1)(7, TaskDetailPageComponent_Conditional_7_Template, 1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TaskDetailPageComponent_Conditional_8_Template, 1, 2, "app-task-form", 3)(9, TaskDetailPageComponent_Conditional_9_Template, 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](6, ctx.id ? 6 : 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](8, !ctx.id || ctx.data ? 8 : 9);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, src_app_components_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_0__.TaskFormComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinner],
    styles: [".task-deatail__title[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.task-deatail__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.loader[_ngcontent-%COMP%] {\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdGFzay1kZXRhaWwtcGFnZS90YXNrLWRldGFpbC1wYWdlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vJUQxJTgzJUQxJTg3JUQwJUI1JUQwJUIxJUQwJUIwLyVEMSU4MiVEMCVCNSVEMSU4MSVEMSU4MiVEMCVCRSVEMCVCMiVEMSU4QiVEMCVCNS90YXNrdHJhY2tlci9zcmMvYXBwL3BhZ2VzL3Rhc2stZGV0YWlsLXBhZ2UvdGFzay1kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQVI7QURFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNBUjs7QURJQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0FDREoiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay1kZWF0YWlsIHtcclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgICZfX2hlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMTBweDtcclxuICAgIH0gXHJcbn1cclxuXHJcbi5sb2FkZXIge1xyXG4gICAgbWFyZ2luOiAgYXV0bztcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufSIsIi50YXNrLWRlYXRhaWxfX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnRhc2stZGVhdGFpbF9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ubG9hZGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2745:
/*!**********************************************************!*\
  !*** ./src/app/pages/tasks-page/tasks-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksPageComponent: () => (/* binding */ TasksPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_components_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/tasks-table/tasks-table.component */ 169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);







const _c0 = () => ["/", "task", "new"];
class TasksPageComponent {
  static #_ = this.ɵfac = function TasksPageComponent_Factory(t) {
    return new (t || TasksPageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TasksPageComponent,
    selectors: [["app-tasks-page"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 2,
    consts: [[1, "task-page__header"], ["mat-raised-button", "", 3, "routerLink"]],
    template: function TasksPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main")(1, "div", 0)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u0434\u0430\u0447");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u0447\u0443 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-tasks-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, src_app_components_tasks_table_tasks_table_component__WEBPACK_IMPORTED_MODULE_0__.TasksTableComponent],
    styles: [".task-page__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdGFza3MtcGFnZS90YXNrcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vJUQxJTgzJUQxJTg3JUQwJUI1JUQwJUIxJUQwJUIwLyVEMSU4MiVEMCVCNSVEMSU4MSVEMSU4MiVEMCVCRSVEMCVCMiVEMSU4QiVEMCVCNS90YXNrdHJhY2tlci9zcmMvYXBwL3BhZ2VzL3Rhc2tzLXBhZ2UvdGFza3MtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0FSIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2stcGFnZSB7XHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG59IiwiLnRhc2stcGFnZV9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5897:
/*!*******************************!*\
  !*** ./src/core/api.const.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL)
/* harmony export */ });
const BASE_URL = 'api/tasks/';

/***/ }),

/***/ 173:
/*!*************************************************!*\
  !*** ./src/core/dto/create-task.transformer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskBodyDTO: () => (/* binding */ createTaskBodyDTO)
/* harmony export */ });
/* harmony import */ var _interfaces_priority_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/priority.interface */ 5552);
/* harmony import */ var _interfaces_status_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/status.interface */ 7246);


const createTaskBodyDTO = (body, id) => ({
  id: id ? id : 0,
  title: body.title.value,
  description: body.description.value,
  deadline: body.deadline.value,
  priority: body.priority.value ?? _interfaces_priority_interface__WEBPACK_IMPORTED_MODULE_0__.PriorityType.MIDDLE,
  status: body.status.value ?? _interfaces_status_interface__WEBPACK_IMPORTED_MODULE_1__.StatusType.CREATE,
  performer: body.performer.value
});

/***/ }),

/***/ 5552:
/*!***************************************************!*\
  !*** ./src/core/interfaces/priority.interface.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRIORITIES: () => (/* binding */ PRIORITIES),
/* harmony export */   PRIORITY_TYPE_NAME: () => (/* binding */ PRIORITY_TYPE_NAME),
/* harmony export */   PriorityType: () => (/* binding */ PriorityType),
/* harmony export */   PriorityTypeName: () => (/* binding */ PriorityTypeName)
/* harmony export */ });
var PriorityType;
(function (PriorityType) {
  PriorityType["HIGH"] = "HIGH";
  PriorityType["MIDDLE"] = "MiDDLE";
  PriorityType["LOW"] = "LOW";
})(PriorityType || (PriorityType = {}));
var PriorityTypeName;
(function (PriorityTypeName) {
  PriorityTypeName["HIGH"] = "\u0412\u044B\u0441\u043E\u043A\u0438\u0439";
  PriorityTypeName["MIDDLE"] = "\u0421\u0440\u0435\u0434\u043D\u0438\u0439";
  PriorityTypeName["LOW"] = "\u041D\u0438\u0437\u043A\u0438\u0439";
})(PriorityTypeName || (PriorityTypeName = {}));
const PRIORITY_TYPE_NAME = {
  [PriorityType.HIGH]: PriorityTypeName.HIGH,
  [PriorityType.MIDDLE]: PriorityTypeName.MIDDLE,
  [PriorityType.LOW]: PriorityTypeName.LOW
};
const PRIORITIES = [{
  value: PriorityType.HIGH,
  name: PriorityTypeName.HIGH
}, {
  value: PriorityType.MIDDLE,
  name: PriorityTypeName.MIDDLE
}, {
  value: PriorityType.LOW,
  name: PriorityTypeName.LOW
}];

/***/ }),

/***/ 7246:
/*!*************************************************!*\
  !*** ./src/core/interfaces/status.interface.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STATUSES: () => (/* binding */ STATUSES),
/* harmony export */   STATUS_TYPE_NAME: () => (/* binding */ STATUS_TYPE_NAME),
/* harmony export */   StatusType: () => (/* binding */ StatusType),
/* harmony export */   StatusTypeName: () => (/* binding */ StatusTypeName)
/* harmony export */ });
var StatusType;
(function (StatusType) {
  StatusType["CREATE"] = "CREATE";
  StatusType["IN_PROGRESS"] = "IN_PROGRESS";
  StatusType["COMPLETED"] = "COMPLETED";
})(StatusType || (StatusType = {}));
var StatusTypeName;
(function (StatusTypeName) {
  StatusTypeName["CREATE"] = "\u0421\u043E\u0437\u0434\u0430\u043D\u0430";
  StatusTypeName["IN_PROGRESS"] = "\u0412 \u0440\u0430\u0431\u043E\u0442\u0435";
  StatusTypeName["COMPLETED"] = "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430";
})(StatusTypeName || (StatusTypeName = {}));
const STATUS_TYPE_NAME = {
  [StatusType.CREATE]: StatusTypeName.CREATE,
  [StatusType.IN_PROGRESS]: StatusTypeName.IN_PROGRESS,
  [StatusType.COMPLETED]: StatusTypeName.COMPLETED
};
const STATUSES = [{
  value: StatusType.CREATE,
  name: StatusTypeName.CREATE
}, {
  value: StatusType.IN_PROGRESS,
  name: StatusTypeName.IN_PROGRESS
}, {
  value: StatusType.COMPLETED,
  name: StatusTypeName.COMPLETED
}];

/***/ }),

/***/ 7756:
/*!************************************************!*\
  !*** ./src/core/interfaces/table.interface.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DISPLAY_COLUMS_TYPE_NAME: () => (/* binding */ DISPLAY_COLUMS_TYPE_NAME),
/* harmony export */   DisplayedColumnsType: () => (/* binding */ DisplayedColumnsType),
/* harmony export */   DisplayedColumnsTypeName: () => (/* binding */ DisplayedColumnsTypeName)
/* harmony export */ });
var DisplayedColumnsType;
(function (DisplayedColumnsType) {
  DisplayedColumnsType["TITLE"] = "title";
  DisplayedColumnsType["DEADLINE"] = "deadline";
  DisplayedColumnsType["PRIORITY"] = "priority";
  DisplayedColumnsType["STATUS"] = "status";
  DisplayedColumnsType["PERFORMER"] = "performer";
})(DisplayedColumnsType || (DisplayedColumnsType = {}));
var DisplayedColumnsTypeName;
(function (DisplayedColumnsTypeName) {
  DisplayedColumnsTypeName["TITLE"] = "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435";
  DisplayedColumnsTypeName["DEADLINE"] = "\u0414\u0435\u0434\u043B\u0430\u0439\u043D";
  DisplayedColumnsTypeName["PRIORITY"] = "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442";
  DisplayedColumnsTypeName["STATUS"] = "\u0421\u0442\u0430\u0442\u0443\u0441";
  DisplayedColumnsTypeName["PERFORMER"] = "\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C";
})(DisplayedColumnsTypeName || (DisplayedColumnsTypeName = {}));
const DISPLAY_COLUMS_TYPE_NAME = {
  [DisplayedColumnsType.TITLE]: DisplayedColumnsTypeName.TITLE,
  [DisplayedColumnsType.DEADLINE]: DisplayedColumnsTypeName.DEADLINE,
  [DisplayedColumnsType.PRIORITY]: DisplayedColumnsTypeName.PRIORITY,
  [DisplayedColumnsType.STATUS]: DisplayedColumnsTypeName.STATUS,
  [DisplayedColumnsType.PERFORMER]: DisplayedColumnsTypeName.PERFORMER
};

/***/ }),

/***/ 433:
/*!********************************************************!*\
  !*** ./src/core/pipes/get-display-column-name.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetDisplayColumnNamePipe: () => (/* binding */ GetDisplayColumnNamePipe)
/* harmony export */ });
/* harmony import */ var src_core_interfaces_table_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/core/interfaces/table.interface */ 7756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class GetDisplayColumnNamePipe {
  transform(value) {
    return src_core_interfaces_table_interface__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_COLUMS_TYPE_NAME[value];
  }
  static #_ = this.ɵfac = function GetDisplayColumnNamePipe_Factory(t) {
    return new (t || GetDisplayColumnNamePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "getDisplayColumnName",
    type: GetDisplayColumnNamePipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 9119:
/*!*************************************************!*\
  !*** ./src/core/pipes/get-display-name.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetDisplayNamePipe: () => (/* binding */ GetDisplayNamePipe)
/* harmony export */ });
/* harmony import */ var src_core_interfaces_priority_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/core/interfaces/priority.interface */ 5552);
/* harmony import */ var src_core_interfaces_status_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/core/interfaces/status.interface */ 7246);
/* harmony import */ var src_core_interfaces_table_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/core/interfaces/table.interface */ 7756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);





class GetDisplayNamePipe {
  constructor(date) {
    this.date = date;
  }
  transform(value, columnName) {
    switch (columnName) {
      case src_core_interfaces_table_interface__WEBPACK_IMPORTED_MODULE_2__.DisplayedColumnsType.DEADLINE:
        return this.date.transform(value, 'HH:mm dd.MM.yyyy');
      case src_core_interfaces_table_interface__WEBPACK_IMPORTED_MODULE_2__.DisplayedColumnsType.PRIORITY:
        return src_core_interfaces_priority_interface__WEBPACK_IMPORTED_MODULE_0__.PRIORITY_TYPE_NAME[value];
      case src_core_interfaces_table_interface__WEBPACK_IMPORTED_MODULE_2__.DisplayedColumnsType.STATUS:
        return src_core_interfaces_status_interface__WEBPACK_IMPORTED_MODULE_1__.STATUS_TYPE_NAME[value];
      default:
        return value;
    }
  }
  static #_ = this.ɵfac = function GetDisplayNamePipe_Factory(t) {
    return new (t || GetDisplayNamePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefinePipe"]({
    name: "getDisplayName",
    type: GetDisplayNamePipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 7468:
/*!********************************************************!*\
  !*** ./src/core/pipes/get-filter-display-name.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetFilterDisplayNamePipe: () => (/* binding */ GetFilterDisplayNamePipe)
/* harmony export */ });
/* harmony import */ var src_core_interfaces_status_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/core/interfaces/status.interface */ 7246);
/* harmony import */ var src_core_interfaces_table_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/core/interfaces/table.interface */ 7756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);




class GetFilterDisplayNamePipe {
  constructor(date) {
    this.date = date;
  }
  transform(value, ...args) {
    if (value === 'All') {
      return 'Любой';
    }
    switch (args[0].name) {
      case src_core_interfaces_table_interface__WEBPACK_IMPORTED_MODULE_1__.DisplayedColumnsType.STATUS:
        return src_core_interfaces_status_interface__WEBPACK_IMPORTED_MODULE_0__.STATUS_TYPE_NAME[value];
      case src_core_interfaces_table_interface__WEBPACK_IMPORTED_MODULE_1__.DisplayedColumnsType.DEADLINE:
        return this.date.transform(value, 'HH:mm dd.MM.yyyy');
      default:
        return value;
    }
    return null;
  }
  static #_ = this.ɵfac = function GetFilterDisplayNamePipe_Factory(t) {
    return new (t || GetFilterDisplayNamePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
    name: "getFilterDisplayName",
    type: GetFilterDisplayNamePipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 8357:
/*!********************************************************!*\
  !*** ./src/core/services/in-memory-storage.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InMemoryStorageService: () => (/* binding */ InMemoryStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class InMemoryStorageService {
  createDb() {
    const data = {
      tasks: []
    };
    return data;
  }
  genId(tasks) {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
  }
  get(reqInfo) {
    if (reqInfo.collectionName === 'tasks') {
      if (!!reqInfo.id) {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
          const items = JSON.parse(tasks);
          const task = items.find(item => item.id === +reqInfo.id);
          if (task) {
            return reqInfo.utils.createResponse$(() => {
              return {
                body: task,
                status: 200
              };
            });
          } else {
            return reqInfo.utils.createResponse$(() => {
              return {
                status: 404,
                body: `Task with id ${reqInfo.id} not found`
              };
            });
          }
        }
      } else {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
          const items = JSON.parse(tasks);
          return reqInfo.utils.createResponse$(() => {
            return {
              body: items,
              status: 200
            };
          });
        }
      }
    }
    return reqInfo.utils.createResponse$(() => {
      return {
        status: 400,
        body: 'Bad request'
      };
    });
  }
  post(reqInfo) {
    if (reqInfo.collectionName === 'tasks') {
      const body = reqInfo.utils.getJsonBody(reqInfo.req);
      let tasks = localStorage.getItem('tasks');
      let items = tasks ? JSON.parse(tasks) : [];
      items.push({
        ...body,
        id: this.genId(items)
      });
      localStorage.setItem('tasks', JSON.stringify(items));
      return reqInfo.utils.createResponse$(() => {
        return {
          body,
          status: 200
        };
      });
    }
    return reqInfo.utils.createResponse$(() => {
      return {
        status: 400,
        body: 'Bad request'
      };
    });
  }
  patch(reqInfo) {
    if (reqInfo.collectionName === 'tasks') {
      const item = reqInfo.utils.getJsonBody(reqInfo.req);
      let tasks = localStorage.getItem('tasks');
      let items = tasks ? JSON.parse(tasks) : [];
      const index = items.findIndex(existingItem => existingItem.id === item.id);
      if (index >= 0) {
        Object.assign(items[index], item);
        localStorage.setItem('tasks', JSON.stringify(items));
        return reqInfo.utils.createResponse$(() => {
          return {
            updatedItem: items[index],
            status: 200
          };
        });
      }
    }
    return reqInfo.utils.createResponse$(() => {
      return {
        status: 400,
        body: 'Bad request'
      };
    });
  }
  static #_ = this.ɵfac = function InMemoryStorageService_Factory(t) {
    return new (t || InMemoryStorageService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: InMemoryStorageService,
    factory: InMemoryStorageService.ɵfac
  });
}

/***/ }),

/***/ 8453:
/*!*******************************************!*\
  !*** ./src/core/services/task.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskService: () => (/* binding */ TaskService)
/* harmony export */ });
/* harmony import */ var _api_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.const */ 5897);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);




class TaskService {
  get tasks$() {
    return this._tasks$.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.filter)(res => !!res));
  }
  constructor(http) {
    this.http = http;
    this._tasks$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
  }
  getTasks() {
    return this.http.get(_api_const__WEBPACK_IMPORTED_MODULE_0__.BASE_URL).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(res => this._tasks$.next(res)));
  }
  getTaskById(id) {
    return this.http.get(_api_const__WEBPACK_IMPORTED_MODULE_0__.BASE_URL + id);
  }
  createTask(task) {
    return this.http.post(_api_const__WEBPACK_IMPORTED_MODULE_0__.BASE_URL, task);
  }
  updateTask(task) {
    return this.http.patch(_api_const__WEBPACK_IMPORTED_MODULE_0__.BASE_URL, task);
  }
  static #_ = this.ɵfac = function TaskService_Factory(t) {
    return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: TaskService,
    factory: TaskService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map