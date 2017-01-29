'use strict';

const STRIP_STYLE = new RegExp('(<style(.*?))>([\\S\\s]*?)(<\/style>)', 'gi');
const IMG_ALT_DOUBLE_QUOTE = new RegExp('<img.+?alt=\"([^\"]*)\"[^>]*\>', 'gi');
const IMG_ALT_SINGLE_QUOTE = new RegExp('<img.+?alt=\'([^\']*)\'[^>]*\>', 'gi');
const HTML_LINKS = new RegExp('<a\\s.*?href=["\'](mailto:)?([^"\']*)["\'][^>]*>((.|\s)*?)<\/a>', 'gi');
const HEADER_CLOSING_TAGS = new RegExp('(<\/h[1-6]>)', 'gi');
const HEADER_TAGS = new RegExp('[\\s]*<h([1-6]+)[^>]*>[\\s]*(.*)[\\s]*<\/h[1-6]+>', 'gi');
const LINE_BREAK = new RegExp('<br[\\s]*\/?>', 'gi');
const WRAP_SPANS = new RegExp('(<\/span>)[\\s]+(<span)', 'gim'); // multi-line
const HTML_LIST = new RegExp('[\\s]*(<li[^>]*>)[\\s]*', 'gi');
const HTML_LIST_NO_NEWLINE = new RegExp('<\/li>[\\s]*(?![\\n])', 'gi');
const PARAGRAPHS = new RegExp('<\/p>', 'gi');
const CONSECUTIVE_SPACE = new RegExp('/ {2,}/', 'g');
const LINE_FEED = new RegExp('\\r\\n?', 'g');
const STRIP_UNWANTED_HTML = new RegExp('<\/?[^>]*>', 'gi');
const NBSP = new RegExp('[ \\t]*&nbsp;+[ \\t]*', 'g');
const SPACE_AT_START = new RegExp('\\n[ \\t]+', 'g');
const SPACE_AT_END = new RegExp('[ \\t]+\\n', 'g');
const CONSECUTIVE_NEWLINE = new RegExp('\\n{3,}', 'g');
const WORD_PARENTHESIS = new RegExp('\\(([ \\n])(http[^)]+)([\\n ])\\)', 'g');

module.exports = {
    STRIP_STYLE,
    IMG_ALT_DOUBLE_QUOTE,
    IMG_ALT_SINGLE_QUOTE,
    HTML_LINKS,
    HEADER_CLOSING_TAGS,
    HEADER_TAGS,
    LINE_BREAK,
    WRAP_SPANS,
    HTML_LIST,
    HTML_LIST_NO_NEWLINE,
    PARAGRAPHS,
    CONSECUTIVE_SPACE,
    LINE_FEED,
    STRIP_UNWANTED_HTML,
    NBSP,
    SPACE_AT_START,
    SPACE_AT_END,
    CONSECUTIVE_NEWLINE,
    WORD_PARENTHESIS
};