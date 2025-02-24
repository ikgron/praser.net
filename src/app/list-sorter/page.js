'use client';
import { useState, useEffect } from 'react';

import styles from './ListSorter.module.css';
import '@/app/globals.css';

const ListSorter = () => {
  const [inputValue, setInputValue] = useState('');
  const [sortedItems, setSortedItems] = useState([]);
  const [reverse, setReverse] = useState(false);
  const [sortMethod, setSortMethod] = useState('alphabetical');
  const [delimiter, setDelimiter] = useState('\n');
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  const handleSort = () => {
    let items = inputValue
      .split(delimiter)
      .map((item) => item.trim())
      .filter((item) => item !== '');

    if (sortMethod === 'alphabetical') {
      items.sort((a, b) => a.localeCompare(b));
    } else if (sortMethod === 'length') {
      items.sort((a, b) => a.length - b.length);
    } else if (sortMethod === 'numerical') {
      items.sort(
        (a, b) =>
          parseFloat(a.replace(/[^0-9.]/g, '')) -
          parseFloat(b.replace(/[^0-9.]/g, ''))
      );
    }

    if (reverse) {
      items.reverse();
    }

    setSortedItems(items);
  };

  const handleReverse = () => {
    setReverse(!reverse);
  };

  const handleClearInput = () => {
    setInputValue('');
    handleSort();
  };

  const handleCopyOutput = () => {
    const outputElement = document.getElementById('output');
    outputElement.select();
    document.execCommand('copy');
    outputElement.blur();
    setCopyButtonText('Copied!');
    setTimeout(() => {
      setCopyButtonText('Copy');
    }, 2000);
  };

  useEffect(() => {
    if (inputValue.includes('\n')) {
      setDelimiter('\n');
    } else if (inputValue.includes(';')) {
      setDelimiter(';');
    } else if (inputValue.includes(',')) {
      setDelimiter(',');
    }
    handleSort();
  }, [inputValue, sortMethod, reverse]);

  return (
    <>
      <title>List Sorter | Praser</title>

      <div
        className="row"
        style={{
          maxWidth: '80%',
          margin: '0 auto',
          marginTop: '3rem',
        }}
      >
        <div>
          <h2>Input</h2>
          <div id="inputContainer">
            <textarea
              id="input"
              className={`${styles.textarea} form-control placeholder1`}
              placeholder="Separate by commas, semicolons, or new lines."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div
              style={{
                textAlign: 'left',
              }}
            >
              <label htmlFor="sortMethod">
                <select
                  id="sortMethod"
                  className={`${styles.formSelect} form-select-sm`}
                  onChange={(e) => setSortMethod(e.target.value)}
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

        <div
          style={{
            marginTop: '3rem',
          }}
        >
          <h2>Output</h2>
          <div id="outputContainer">
            <textarea
              id="output"
              className={`${styles.textarea} form-control placeholder1`}
              placeholder="Output appears here."
              readOnly
              value={sortedItems.join(
                delimiter === '\n' ? '\n' : delimiter === ';' ? '; ' : ', '
              )}
            />
            <div
              style={{
                textAlign: 'left',
                marginBottom: '3rem',
              }}
            >
              <button
                id="reverseButton"
                type="button"
                className={`${styles.listButton} ${styles.bttn} ${reverse ? styles.reverseActive : ''}`}
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
    </>
  );
};

export default ListSorter;
