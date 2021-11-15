import React from 'react';
import './style.scss';
const data = require('./data.json');

const Results = () => {
  return (
    <div>
      <p>Your resources are not enough or finished already</p>
    </div>
  );
};

const ListItem = ({ items, onShowResult }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = (event, items) => {
    event.preventDefault();
    if (items.children === undefined) {
      onShowResult();
    } else {
      setIsOpen((isOpen) => !isOpen);
    }
  };

  return (
    <React.Fragment>
      <li className="listItems">
        <a href={'#'} onClick={(e) => handleClick(e, items)}>
          <label for="huey">{items.label}</label>
          <input type="radio" value={items.label} /> {!!items.children}
        </a>
        {items.children && isOpen && (
          <ul className="subList">
            {items.children.map((child, idx) => (
              <ListItem items={child} key={idx} onShowResult={onShowResult} />
            ))}
          </ul>
        )}
      </li>
    </React.Fragment>
  );
};

export default function Crime() {
  const [showResult, setShowResult] = React.useState(false);

  const boxes = React.useMemo(
    () =>
      data.map((value) => {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 20);
        return { value, row, col };
      }),
    []
  );

  if (!boxes) return null;

  return (
    <div className="container">
      {boxes.map((b, idx) => (
        <React.Fragment key={idx}>
          <span
            key={idx}
            className="box"
            style={{ gridColumnStart: b.col, gridRowStart: b.row }}
          >
            <a href={`#example${idx}`}>{b.value.label}</a>
          </span>
          <div className="lightbox" id={`example${idx}`}>
            <figure>
              <a
                href="#"
                onClick={(e) => setShowResult(false)}
                className="close"
              ></a>
              <figcaption>
                {showResult ? (
                  <Results />
                ) : (
                  b.value.children.map((values, id) => (
                    <ListItem
                      items={values}
                      onShowResult={() => setShowResult(true)}
                    />
                  ))
                )}
              </figcaption>
            </figure>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
