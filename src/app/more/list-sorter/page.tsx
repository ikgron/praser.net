"use client";
import { type ChangeEvent, useCallback, useEffect, useState } from "react";
import styles from "@/styles/ListSorter.module.css";

const ListSorter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [sortedItems, setSortedItems] = useState<string[]>([]);
  const [reverse, setReverse] = useState<boolean>(false);
  const [sortMethod, setSortMethod] = useState<
    "alphabetical" | "length" | "numerical"
  >("alphabetical");
  const [delimiter, setDelimiter] = useState<"\n" | ";" | ",">("\n");
  const [copyButtonText, setCopyButtonText] = useState<string>("Copy");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleSort = useCallback(() => {
    const items = inputValue
      .split(delimiter)
      .map((item) => item.trim())
      .filter((item) => item !== "");

    if (sortMethod === "alphabetical") {
      items.sort((a, b) => a.localeCompare(b));
    } else if (sortMethod === "length") {
      items.sort((a, b) => a.length - b.length);
    } else if (sortMethod === "numerical") {
      items.sort((a, b) => {
        const numA = parseFloat(a.replace(/[^0-9.]/g, ""));
        const numB = parseFloat(b.replace(/[^0-9.]/g, ""));
        return (
          (Number.isNaN(numA) ? 0 : numA) - (Number.isNaN(numB) ? 0 : numB)
        );
      });
    }

    if (reverse) {
      items.reverse();
    }

    setSortedItems(items);
  }, [inputValue, delimiter, sortMethod, reverse]);

  const handleReverse = () => setReverse((prevReverse) => !prevReverse);

  const handleClearInput = () => {
    setInputValue("");
    handleSort();
  };

  const handleCopyOutput = async () => {
    const outputElement = document.getElementById(
      "output",
    ) as HTMLTextAreaElement;
    outputElement.select();
    try {
      await navigator.clipboard.writeText(outputElement.value);
      setCopyButtonText("Copied!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
    outputElement.blur();
    setTimeout(() => {
      setCopyButtonText("Copy");
    }, 2000);
  };

  useEffect(() => {
    if (inputValue.includes("\n")) {
      setDelimiter("\n");
    } else if (inputValue.includes(";")) {
      setDelimiter(";");
    } else if (inputValue.includes(",")) {
      setDelimiter(",");
    }
    handleSort();
  }, [inputValue, handleSort]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <title>List Sorter | Praser</title>

      {/* Mobile Layout */}
      {isMobile ? (
        <div
          className="row"
          style={{ maxWidth: "80%", margin: "0 auto", marginTop: "3rem" }}
        >
          <div>
            <h2>Input</h2>
            <div id="inputContainer">
              <textarea
                id="input"
                className={`${styles.textarea} form-control placeholder1`}
                placeholder="Separate by commas, semicolons, or new lines."
                value={inputValue}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setInputValue(e.target.value)
                }
              />
              <div style={{ textAlign: "left" }}>
                <label htmlFor="sortMethod">
                  <select
                    id="sortMethod"
                    className={`${styles.formSelect} form-select-sm`}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setSortMethod(
                        e.target.value as
                          | "alphabetical"
                          | "length"
                          | "numerical",
                      )
                    }
                    value={sortMethod}
                  >
                    <option value="alphabetical">Alphabetical</option>
                    <option value="length">Length</option>
                    <option value="numerical">Numerical</option>
                  </select>
                </label>
                <button
                  id="clearButton"
                  type="button"
                  className={`${styles.listButton} ${styles.bttn}`}
                  onClick={handleClearInput}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <h2>Output</h2>
            <div id="outputContainer">
              <textarea
                id="output"
                className={`${styles.textarea} form-control placeholder1`}
                placeholder="Output appears here."
                readOnly
                value={sortedItems.join(
                  delimiter === "\n" ? "\n" : delimiter === ";" ? "; " : ", ",
                )}
              />
              <div style={{ textAlign: "left", marginBottom: "3rem" }}>
                <button
                  id="reverseButton"
                  type="button"
                  className={`${styles.listButton} ${styles.bttn} ${reverse ? styles.reverseActive : ""}`}
                  onClick={handleReverse}
                >
                  Reverse Output
                </button>

                <button
                  id="copyButton"
                  type="button"
                  className={`${styles.listButton} ${styles.bttn}`}
                  onClick={handleCopyOutput}
                >
                  {copyButtonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="row"
          style={{
            maxWidth: "90%",
            margin: "0 auto",
            marginTop: "3rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "48%" }}>
            <h2>Input</h2>
            <div id="inputContainer">
              <textarea
                id="input"
                className={`${styles.textarea} form-control placeholder1`}
                placeholder="Separate by commas, semicolons, or new lines."
                value={inputValue}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setInputValue(e.target.value)
                }
              />
              <div style={{ textAlign: "left" }}>
                <label htmlFor="sortMethod">
                  <select
                    id="sortMethod"
                    className={`${styles.formSelect} form-select-sm`}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setSortMethod(
                        e.target.value as
                          | "alphabetical"
                          | "length"
                          | "numerical",
                      )
                    }
                    value={sortMethod}
                  >
                    <option value="alphabetical">Alphabetical</option>
                    <option value="length">Length</option>
                    <option value="numerical">Numerical</option>
                  </select>
                </label>
                <button
                  id="clearButton"
                  type="button"
                  className={`${styles.listButton} ${styles.bttn}`}
                  onClick={handleClearInput}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          <div style={{ width: "48%" }}>
            <h2>Output</h2>
            <div id="outputContainer">
              <textarea
                id="output"
                className={`${styles.textarea} form-control placeholder1`}
                placeholder="Output appears here."
                readOnly
                value={sortedItems.join(
                  delimiter === "\n" ? "\n" : delimiter === ";" ? "; " : ", ",
                )}
              />
              <div style={{ textAlign: "left", marginBottom: "3rem" }}>
                <button
                  id="reverseButton"
                  type="button"
                  className={`${styles.listButton} ${styles.bttn} ${reverse ? styles.reverseActive : ""}`}
                  onClick={handleReverse}
                >
                  Reverse Output
                </button>

                <button
                  id="copyButton"
                  type="button"
                  className={`${styles.listButton} ${styles.bttn}`}
                  onClick={handleCopyOutput}
                >
                  {copyButtonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListSorter;
