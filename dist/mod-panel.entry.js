import { r as registerInstance, h } from './index-1c4a1879.js';

const panelCss = ".panel{display:grid;grid-template-columns:repeat(auto-fill, minmax(max(180px, 20%), 1fr));column-gap:10px;row-gap:10px}";

const Panel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Theme used to influence the cards within the panel */
    this.theme = "minimalist";
    /** Applies pagination to the data. Defaults to `false` */
    this.paginate = false;
    /** Sets a limit of cards per page  */
    this.limit = 0;
    /** Allows the application of custom classes and CSS on-top of existing styles */
    this.classes = "";
    /** Selector for mounted card sizes */
    this.size = "medium";
    /** Generates rounded cards if set to true, otherwise false */
    this.rounded = false;
    this.loadedData = [];
    this.pageNum = 1;
  }
  componentWillRender() {
    this.dataRender(this.data);
  }
  componentDidUpdate() {
  }
  /**
   * Processes simple data strings into array for rendering
   * @param data Some data, either string or array.
   */
  dataRender(data) {
    if (typeof (data) === "string") {
      try {
        let d = JSON.parse(data.slice(1, data.length - 1));
        this.loadedData = d;
      }
      catch (e) {
        data = data.replace(/(\[|\])/g, '');
        let d = data.split(', ');
        this.loadedData = d;
      }
    }
    else {
      this.loadedData = data;
    }
  }
  makePagination(pages, limit) {
    if (pages) {
      return this.loadedData.slice((this.pageNum - 1) * limit, this.pageNum * limit).map((v, i) => (h("mod-card", { key: `${v}-${i}`, theme: this.theme, elevation: 2, size: this.size, rounded: this.rounded }, h("h2", { slot: "title" }, (v.name) ? v.name : (v.title) ? v.title : ""), (v.price)
        ?
          h("h4", { slot: "price" }, v.price)
        :
          h("div", null))));
    }
    else {
      return this.loadedData.map((v, i) => (h("mod-card", { key: `${v}-${i}`, theme: this.theme, elevation: 2, size: this.size, rounded: this.rounded }, h("h2", { slot: "title" }, (v.name) ? v.name : (v.title) ? v.title : ""), (v.price)
        ?
          h("h4", { slot: "price" }, v.price)
        :
          h("div", null))));
    }
  }
  togglePage(key) {
    if (key === 'prev') {
      this.pageNum = (this.pageNum - 1 > 1) ? this.pageNum - 1 : 1;
    }
    else if (key === 'forw') {
      this.pageNum = ((this.pageNum + 1) * this.limit > this.loadedData.length) ? this.pageNum : this.pageNum + 1;
    }
  }
  render() {
    return (h("div", null, h("div", { class: {
        panel: true,
        [`${this.classes}`]: (this.classes !== null || this.classes !== undefined)
      } }, this.makePagination(this.paginate, this.limit)), (this.paginate)
      ?
        h("div", null, h("button", { class: "prev prev-button", onClick: () => this.togglePage('prev') }, "Prev"), h("button", { class: "next next-button", onClick: () => this.togglePage('forw') }, "Next"))
      :
        h("div", { id: "no-paginate-filler" })));
  }
};
Panel.style = panelCss;

export { Panel as mod_panel };
