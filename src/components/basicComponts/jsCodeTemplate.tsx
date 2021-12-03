import 'highlight.js/styles/a11y-dark.css';
import React from 'react';
import highlight from 'highlight.js';
import { useBaseStyle } from '../../styles/base';

interface JsCodeTemplatePropsType {
  jsText: string,
}

function JsCodeTemplate(props: JsCodeTemplatePropsType) {
  const base = useBaseStyle();
  const text = highlight.highlight(props.jsText, { language: 'javascript' }).value;
  return (
      <pre>
        <code className={ `${base.relative} language-javascript hljs` }
              dangerouslySetInnerHTML={ { __html: text } }/>
      </pre>
  );
}

export {
  JsCodeTemplate,
};
