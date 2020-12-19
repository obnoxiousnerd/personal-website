import Prism from "prismjs";
import "prismjs/components";
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-tsx");
require("prismjs/components/prism-bash");
require("prismjs/components/prism-shell-session");
require("prismjs/components/prism-diff");
import styles from "./Codeblock.module.scss";

interface Props {
  code: string;
  fileName?: string;
  language: string;
}
export default function Codeblock({ code, language, fileName }: Props) {
  const highlightedCode = language
    ? /* If lang not specified */ Prism.highlight(
        code,
        Prism.languages[language],
        language
      )
    : code;
  return (
    <div>
      <div className={styles.fileName}>{fileName || language}</div>
      <pre className={`language-${language}`}>
        <code dangerouslySetInnerHTML={{ __html: highlightedCode }}></code>
      </pre>
    </div>
  );
}
