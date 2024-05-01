import Highlight, { defaultProps } from "prism-react-renderer";
import React, {
  CSSProperties,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useRef,
  useEffect,
} from "react";
import startCase from "lodash.startcase";
import {
  mdiCheckboxMarkedCircle,
  mdiCloseCircle,
  mdiContentCopy,
  mdiMenuDown,
  mdiMenuUp,
} from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";
import {
  IcButton,
  IcTab,
  IcTabContext,
  IcTabGroup,
  IcTabPanel,
  IcToggleButton,
  IcToggleButtonGroup,
  SlottedSVG,
} from "@ukic/react";
import StackblitzButton, {
  StackblitzProps,
} from "../../content/structured/patterns/components/StackblitzButton";
import { useViewportWidth } from "../../utils/helpers";
import PageMetadataContext from "../../context/PageMetadata";
import "./index.css";
import {
  createReactAppTsx,
  createWebComponentsIndexHTML,
} from "../../content/structured/patterns/components/StackblitzButton/stackblitz-helpers";

interface LongCodeSnippet {
  language: "jsx" | "tsx";
  snippet: string;
}

interface Snippet {
  technology: string;
  snippets: {
    short?: string | undefined;
    long: string | LongCodeSnippet[];
  };
}

interface ComponentPreviewProps extends Partial<StackblitzProps> {
  snippets?: Snippet[];
  left?: boolean;
  noPadding?: boolean;
  centered?: boolean;
  children: ReactNode;
  style: CSSProperties;
  state: "none" | "good" | "bad";
  showStackblitzBtn: boolean;
  type?: string;
}

interface CodeSnippetProps extends Partial<StackblitzProps> {
  code: string;
  longCode: string;
  type?: string;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  showMore: boolean;
  setShowMore: Dispatch<SetStateAction<boolean>>;
  showStackblitzBtn?: boolean;
  selectedLanguage: "Typescript" | "Javascript";
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  code,
  longCode,
  isWebComponents,
  type,
  show,
  setShow,
  showMore,
  setShowMore,
  showStackblitzBtn,
  projectTitle,
  projectDescription,
  selectedLanguage,
}) => {
  const viewportWidth = useViewportWidth();
  const isLargeViewport: boolean = viewportWidth > 992;

  return (
    <>
      {show && (
        <Highlight
          {...defaultProps}
          code={code}
          language="jsx"
          theme={undefined}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={clsx(className, "snippet")} style={style}>
              <code>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </code>
            </pre>
          )}
        </Highlight>
      )}
      <div className="snippet-container">
        {type === "pattern" && (
          <IcButton
            variant="tertiary"
            size={isLargeViewport ? "small" : "default"}
            appearance="dark"
            onClick={() => setShow(!show)}
          >
            {!show ? "Show" : "Hide"} code
            <SlottedSVG
              slot="right-icon"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              path={!show ? mdiMenuDown : mdiMenuUp}
            />
          </IcButton>
        )}
        {type !== "pattern" && (
          <IcButton
            variant="tertiary"
            size={isLargeViewport ? "small" : "default"}
            appearance="dark"
            onClick={() => setShowMore(!showMore)}
          >
            Show {showMore ? "less" : "full"} code
            <SlottedSVG
              slot="right-icon"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              path={showMore ? mdiMenuUp : mdiMenuDown}
            />
          </IcButton>
        )}
        <div className="code-actions">
          {showStackblitzBtn && projectTitle !== undefined && (
            <StackblitzButton
              codeSnippet={longCode}
              isWebComponents={isWebComponents}
              projectTitle={projectTitle}
              projectDescription={projectDescription}
              isJSX={selectedLanguage === "Javascript"}
            />
          )}
          <IcButton
            aria-label={isLargeViewport ? "" : "Copy code"}
            variant={isLargeViewport ? "tertiary" : "icon"}
            size={isLargeViewport ? "small" : "default"}
            appearance="dark"
            onClick={() => {
              navigator.clipboard.writeText(code);
              document
                .querySelector<HTMLIcToastElement>("#copy-to-clipboard-toast")
                ?.setVisible();
            }}
          >
            <SlottedSVG
              path={mdiContentCopy}
              slot={isLargeViewport ? "left-icon" : undefined}
              viewBow="0 0 24 24"
              width="24"
              height="24"
            />
            {isLargeViewport && "Copy code"}
          </IcButton>
        </div>
      </div>
    </>
  );
};

const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  snippets,
  children = false,
  left = false,
  noPadding = false,
  centered = true,
  style,
  state = "none",
  showStackblitzBtn = true,
  projectTitle,
  projectDescription,
  type,
}) => {
  const viewportWidth = useViewportWidth();
  const isLargeViewport: boolean = viewportWidth > 992;

  const [tabCount, setTabCount] = useState<number>(2);
  const tabContextRef = useRef<HTMLIcTabContextElement | null>(null);

  useEffect(() => {
    if (tabContextRef.current) {
      const tabs = tabContextRef.current.querySelectorAll("ic-tab");
      setTabCount(tabs.length);
    }
  }, []);

  // Show/hide functionality for pattern code previews
  const [show, setShow] = useState<boolean>(type !== "pattern");
  // Show more/less functionality for component code previews
  const [showMore, setShowMore] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<"Web component" | "React">(
    tabCount === 1 ? "React" : "Web component"
  );

  const [selectedLanguage, setSelectedLanguage] = useState<
    "Typescript" | "Javascript"
  >("Typescript");

  const tabSelectCallback = (ev: CustomEvent) => {
    setSelectedTab(ev.detail.tabLabel);
  };

  const pageMetadata = React.useContext(PageMetadataContext);

  const getTypeOfProject = (snippet: Snippet) => {
    if (type === "pattern") {
      return " pattern";
    }
    if (snippet.technology === "React") {
      return " component";
    }
    return "";
  };

  // need to account for if the code starts with styling as opposed to a tag

  const formatLines = (snippet: Snippet | string, longCodeIndex?: number) => {
    const formatWhiteSpace = (
      codeSnippet: Snippet | string,
      index?: number
    ) => {
      if (
        index &&
        typeof codeSnippet !== "string" &&
        selectedTab === "React" &&
        Array.isArray(codeSnippet.snippets.long) &&
        codeSnippet.snippets.long[index].snippet === "{shortCode}"
      ) {
        return `\t`;
      }
      return `\t\t`;
    };
    const lines = String(snippet).split("\n");
    const newLines = lines ? [...lines] : [];
    if (newLines.length > 0) {
      for (let i = 1; i < newLines.length + 1; i += 1) {
        const tabs = formatWhiteSpace(snippet, longCodeIndex);
        newLines[i] = `${selectedTab === "Web component" ? `\t` : tabs}${
          newLines[i]
        }`;
      }
    }
    return newLines.join("\n");
  };

  const getCodeSnippetForWebComponent = (
    snippet: Snippet,
    shortCodeSnippet: string
  ) => {
    let longCode = "";
    if (
      !Array.isArray(snippet.snippets.long) &&
      typeof snippet.snippets.long === "string"
    ) {
      longCode = snippet.snippets.long.replace(
        "{shortCode}",
        `${shortCodeSnippet}`
      );
    }

    let codeSnippet;
    if (showMore) {
      codeSnippet = createWebComponentsIndexHTML(longCode);
    } else if (type === "pattern") {
      if (typeof snippet.snippets.long === "string")
        codeSnippet = createWebComponentsIndexHTML(snippet.snippets.long);
    } else {
      codeSnippet = snippet.snippets.short;
    }
    console.log({
      longCode: createWebComponentsIndexHTML(longCode),
      lines: createWebComponentsIndexHTML(formatLines(longCode)),
    });

    return {
      longCode: createWebComponentsIndexHTML(longCode),
      codeSnippet: codeSnippet || "",
    };
  };

  const getCodeSnippet = (snippet: Snippet) => {
    const isLongCode = showMore || type === "pattern";
    const longCodeIndex = selectedLanguage === "Typescript" ? 0 : 1;
    let shortCodeSnippet: string | undefined = "";
    if (type !== "pattern") shortCodeSnippet = snippet.snippets.short;

    shortCodeSnippet = formatLines(
      shortCodeSnippet ? shortCodeSnippet : "error",
      longCodeIndex
    );

    if (selectedTab === "Web component" && snippet.technology !== "React") {
      return getCodeSnippetForWebComponent(snippet, shortCodeSnippet);
    }

    if (Array.isArray(snippet.snippets.long)) {
      let longCode = "";
      if (
        !Array.isArray(snippet.snippets.long[longCodeIndex].snippet) &&
        typeof snippet.snippets.long[longCodeIndex].snippet === "string"
      ) {
        longCode = createReactAppTsx(
          snippet.snippets.long[longCodeIndex].snippet.replace(
            "{shortCode}",
            `${shortCodeSnippet}`
          ),
          pageMetadata.pageTitle,
          longCodeIndex === 0 ? "tsx" : "jsx"
        );
      }
      return {
        longCode,
        codeSnippet: isLongCode ? longCode : snippet.snippets.short,
      };
    }
    return {
      longCode: "error",
      codeSnippet: "error",
    };
  };

  return (
    <div className="comp-preview">
      <h4 className="offscreen">Interactive example</h4>
      <div
        className={clsx(
          "comp-zone",
          centered && "centered",
          left && "left",
          noPadding && "no-padding",
          !!type && type
        )}
        style={style}
      >
        {(state === "good" && (
          <Icon
            path={mdiCheckboxMarkedCircle}
            size="36px"
            className={clsx("comp-icon", "comp-do-icon")}
            aria-hidden="true"
          />
        )) ||
          (state === "bad" && (
            <Icon
              path={mdiCloseCircle}
              size="36px"
              className={clsx("comp-icon", "comp-dont-icon")}
              aria-hidden="true"
            />
          ))}
        {children}
      </div>
      {snippets && (
        <IcTabContext
          onIcTabSelect={tabSelectCallback}
          selectedTabIndex={
            selectedTab === "Web component" || tabCount === 1 ? 0 : 1
          }
          ref={tabContextRef}
        >
          <div className="link-zone">
            <IcTabGroup inline label="Framework code snippets">
              {snippets.map((snippet, index) => (
                <IcTab tab-position={index}>{snippet.technology}</IcTab>
              ))}
            </IcTabGroup>
            <div className="toggle-button-container">
              {(selectedTab === "React" || tabCount === 1) && (
                <IcToggleButtonGroup size="small">
                  <IcToggleButton
                    label="TypeScript"
                    accessibleLabel={isLargeViewport ? "" : "TypeScript"}
                    size="small"
                    variant={isLargeViewport ? "default" : "icon"}
                    toggleChecked={selectedLanguage === "Typescript"}
                    onIcToggleChecked={() =>
                      setSelectedLanguage(
                        selectedLanguage === "Typescript"
                          ? "Javascript"
                          : "Typescript"
                      )
                    }
                  >
                    <SlottedSVG
                      slot="icon"
                      viewBow="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path d="M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z" />
                    </SlottedSVG>
                  </IcToggleButton>
                  <IcToggleButton
                    size="small"
                    label="JavaScript"
                    accessibleLabel={isLargeViewport ? "" : "JavaScript"}
                    variant={isLargeViewport ? "default" : "icon"}
                    toggleChecked={selectedLanguage === "Javascript"}
                    onIcToggleChecked={() =>
                      setSelectedLanguage(
                        selectedLanguage === "Typescript"
                          ? "Javascript"
                          : "Typescript"
                      )
                    }
                  >
                    <SlottedSVG
                      slot="icon"
                      viewBow="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path d="M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z" />
                    </SlottedSVG>
                  </IcToggleButton>
                </IcToggleButtonGroup>
              )}
            </div>
          </div>
          {snippets.map((snippet, index) => (
            <IcTabPanel tab-position={index}>
              <CodeSnippet
                type={type}
                code={getCodeSnippet(snippet)?.codeSnippet || ""}
                longCode={getCodeSnippet(snippet)?.longCode || ""}
                show={show}
                setShow={setShow}
                showMore={showMore}
                setShowMore={setShowMore}
                showStackblitzBtn={showStackblitzBtn}
                isWebComponents={snippet.technology === "Web component"}
                projectTitle={`${
                  projectTitle || startCase(pageMetadata.pageTitle)
                } (${snippet.technology}${getTypeOfProject(snippet)})`}
                projectDescription={
                  projectDescription === undefined || projectDescription === ""
                    ? undefined
                    : projectDescription
                }
                selectedLanguage={selectedLanguage}
              />
            </IcTabPanel>
          ))}
        </IcTabContext>
      )}
    </div>
  );
};

export default ComponentPreview;
