'use strict';

const _ = require('lodash');
const he = require('he');
const RegExpression = require('./constants');

const _returnLinkText = (linkContent, cont1, link, linkText) => {
    if (_.isEmpty(linkText)) {
        return '';
    }
    else if (_.lowerCase(_.trim(linkText)) == _.lowerCase(_.trim(link))) {
        return _.trim(linkText);
    }
    else {
        const linkType = _.isUndefined(cont1) ? '' : cont1;
        return linkText + '( ' + linkType + link + ' )';
    }
};

const _returnHeaderText = (maxLineLength, headerContent, headerLevel, headerText) => {
    let hText = headerText.replace(RegExpression.LINE_BREAK, '\n');
    hText = hText.replace(RegExpression.STRIP_UNWANTED_HTML, '');

    const hLength = _.trim(headerText).length <= maxLineLength ? _.trim(headerText).length : maxLineLength;

    if (headerLevel == 1) {
        hText = '*'.repeat(hLength) + "\n" + hText + "\n" + '*'.repeat(hLength)
    }
    else if (headerLevel == 2) {
        hText = '-'.repeat(hLength) + "\n" + hText + "\n" + '-'.repeat(hLength)
    }
    else {
        hText= hText + '\n' + '-'.repeat(hLength);
    }

    return '\n\n' + hText + '\n\n';
};

const _sanitizeText = (textContent, content1, content2, content3) => {
    return _.trim((content1 === '\n' ? content1 : '' ) + '( ' + content2 + ' )' + (content3 === '\n' ? content1 : '' ));
};

const htmlToText = (html, maxLineLength) => {
    let text = html;
    let wrappedWord = [];

    //STRIP STYLE
    text = text.replace(RegExpression.STRIP_STYLE, '');

    // IMG ALT DOUBLE QUOTE
    text = text.replace(RegExpression.IMG_ALT_DOUBLE_QUOTE, '\$1\n');

    // IMG ALT SINGLE QUOTE
    text = text.replace(RegExpression.IMG_ALT_SINGLE_QUOTE, '\$1\n');

    // LINKS
    text = text.replace(RegExpression.HTML_LINKS, _returnLinkText);

    // Headers
    text = text.replace(RegExpression.HEADER_CLOSING_TAGS, '\n\$1');
    text = text.replace(RegExpression.HEADER_TAGS, _returnHeaderText.bind(null, maxLineLength));

    // SPANS
    text = text.replace(RegExpression.WRAP_SPANS, '\$1\$2');

    // LIST
    text = text.replace(RegExpression.HTML_LIST, '* ');
    text = text.replace(RegExpression.HTML_LIST_NO_NEWLINE, '\n');

    // PARAGRAPH AND LINE BREAKS
    text = text.replace(RegExpression.PARAGRAPHS, '\n\n');
    text = text.replace(RegExpression.LINE_BREAK, '\n');

    // ALL OTHER TAGS
    text = text.replace(RegExpression.STRIP_UNWANTED_HTML, '');

    // DECODE HTML ENTITIES
    text = he.decode(text);

    //NO TWO CONSECUTIVE SPACE
    text = text.replace(RegExpression.CONSECUTIVE_SPACE, ' ');

    // WRAP WORD
    text.split('\n').forEach((item, key) => {
        wrappedWord[key] = item.replace(new RegExp('(.{1,'+ maxLineLength +'})(\\s+|$)', 'g'), '\$1\n');
    });
    text = wrappedWord.join('\n');

    // REMOVE LINEFEED
    text = text.replace(RegExpression.LINE_FEED, '\n');

    // STRIP EXTRA SPACE
    text = text.replace(RegExpression.NBSP, '');
    text = text.replace(RegExpression.SPACE_AT_START, '\n');
    text = text.replace(RegExpression.SPACE_AT_END, '\n');

    // NO CONSECUTIVE NEWLINE
    text = text.replace(RegExpression.CONSECUTIVE_NEWLINE, '\n\n');

    // WORD WITH PARENTHESIS
    text = text.replace(RegExpression.WORD_PARENTHESIS, _sanitizeText);

    return text;
};

module.exports = htmlToText;