import { Component, createRef } from "react";
import { glossary } from "../lib/glossary";
import { withRouter } from "next/router";
import Downshift from "downshift";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
    this.searchEndpoint = this.searchEndpoint.bind(this);
    this.onInputValueChange = this.onInputValueChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.glossarySearch = this.glossarySearch.bind(this);
  }

  searchEndpoint(query) {
    return `/api/search?q=${query}`;
  }

  glossarySearch(query) {
    return glossary.filter((entry) => {
      return query.toLowerCase() === entry.name || entry.symbol === query;
    });
  }

  onSelect(item) {
    if (item.slug) {
      this.props.router.push(item.slug);
    }

    this.setState({
      query: "",
      results: [],
    });

    this.props.closeSearch();
  }

  onInputValueChange(query) {
    if (query.length) {
      fetch(this.searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          // Wrap results in an object which will tell React what component to use to render results.
          const results = res.results.map((item) => ({
            type: "RESULT",
            content: item,
          }));

          const glossaryResults = this.glossarySearch(query).map((item) => ({
            type: "GLOSSARY_RESULT",
            content: item,
          }));

          const list = [...glossaryResults, ...results];

          this.setState({ results: list });
        });
    } else {
      this.setState({ results: [] });
    }
  }

  render() {
    const { state, props } = this;

    if (props.showSearch) {
      return (
        <Downshift
          onSelect={(selection) => this.onSelect(selection)}
          onInputValueChange={(event) => this.onInputValueChange(event)}
          itemToString={(item) => (item ? item.slug : "")}
          defaultHighlightedIndex={0}
        >
          {({
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            isOpen,
            inputValue,
            highlightedIndex,
            selectedItem,
            getRootProps,
          }) => (
            <div className="fixed w-screen h-screen z-50 flex flex-col items-center p-4">
              <div
                onClick={(event) => props.closeSearch(event)}
                className="top-0 left-0 fixed w-screen h-screen bg-washedWall"
              />
              <div className="relative flex flex-col max-w-screen-lg md:my-32 w-full md:w-10/12 lg:w-8/12 xl:w-6/12 rounded-xl bg-white min-h-0 overflow-hidden">
                <div
                  style={{ display: "inline-block" }}
                  {...getRootProps({}, { suppressRefError: true })}
                >
                  <input
                    autoFocus
                    className="text-lg md:text-xl lg:text-2xl font-medium text-green-400 bg-transparent py-2 px-4 outline-none relative w-full"
                    placeholder="Search..."
                    type="text"
                    onClick={(e) => e.stopPropagation()}
                    {...getInputProps({
                      onKeyDown: (event) => {
                        if (event.key === "Escape") {
                          // Prevent Downshift's default 'Escape' behavior.
                          event.nativeEvent.preventDownshiftDefault = true;
                          this.props.closeSearch(event);
                        }
                      },
                    })}
                  />
                </div>
                <ul {...getMenuProps()} className="overflow-y-scroll">
                  {isOpen
                    ? state.results.map((item, index) => {
                        const selected = highlightedIndex === index;
                        if (item.type === "GLOSSARY_RESULT") {
                          return (
                            <li
                              className={`cursor-pointer flex text-left w-full ${
                                selected ? "bg-green-400" : ""
                              }`}
                              {...getItemProps({
                                key: item.content.slug + "-" + index,
                                index,
                                item: item.content,
                                selected: highlightedIndex === index,
                              })}
                            >
                              <div className="font-semibold p-3">
                                <p
                                  className={`text-base ${
                                    selected ? "text-white" : "text-wall-600"
                                  }`}
                                >
                                  {item.content.symbol.length > 0 && (
                                    <code
                                      className={`mr-1 rounded px-1 py-0.5 ${
                                        selected
                                          ? "bg-washedWhite"
                                          : "bg-wall-100"
                                      }`}
                                    >
                                      {item.content.symbol}
                                    </code>
                                  )}
                                  {item.content.name}
                                </p>
                                <p
                                  className={`font-normal text-base mt-1 ${
                                    selected ? "text-white" : "text-wall-600"
                                  }`}
                                >
                                  {item.content.desc}
                                </p>
                              </div>
                            </li>
                          );
                        }
                        if (item.type === "RESULT") {
                          return (
                            <li
                              className={`cursor-pointer flex text-left w-full ${
                                selected ? "bg-green-400" : ""
                              }`}
                              {...getItemProps({
                                key: item.content.link + "-" + index,
                                index,
                                item: item.content,
                                selected,
                              })}
                            >
                              <div className="p-3">
                                <p
                                  className={`font-medium text-base ${
                                    selected ? "text-white" : "text-wall-600"
                                  }`}
                                >
                                  {item.content.parent !== "Content"
                                    ? `${item.content.parent} /`
                                    : ""}{" "}
                                  {item.content.title}
                                </p>
                                <p
                                  className={`text-base font-regular text-small ${
                                    selected ? "text-midWhite" : "text-wall-500"
                                  }`}
                                >
                                  {item.content.content}
                                </p>
                              </div>
                            </li>
                          );
                        }
                        return null;
                      })
                    : null}
                </ul>
              </div>
            </div>
          )}
        </Downshift>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(Search);
