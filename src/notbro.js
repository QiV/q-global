import { jsdom } from 'jsdom';
import process from 'process';
var document = jsdom.jsdom('<html><body></body></html>');
var window = document.defaultView;
var body = document.body;
var navigator = {};
var location = {};
var html = {};
export default window;
export {
  window, body, console, document, navigator, location, html, process, set
};

function set(vals){
  if (vals.window) {
    window = vals.window;
  }
  if (vals.body) {
    body = vals.body;
  }
  if (vals.document) {
    document = vals.document;
  }
}
