const columnDefs = [
  { field: 'make', sortable: true },
  { field: 'model', sortable: false },
  { field: 'price', sortable: true }
];
const rowData = [
  { make: 'Toyota', price: 35000, model: 'Celica' },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 },
  { make: 'a', model: 'd', price: 1 },
  { make: 'z', model: 'e', price: 2 },
  { make: 'c', model: 'f', price: 3 }
];

export { columnDefs, rowData };
