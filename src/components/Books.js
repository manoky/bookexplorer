import React, { Component } from 'react';

class Books extends Component {
  render(){
    let missingpic = 'https://rzr.polaris.com/globalassets/system/no-image.png';
    return(
      <div>
        {
          this.props.items.map((item, index)=> {
            let { title, imageLinks, infoLink }= item.volumeInfo;
            return (
              <a key={index} className="book" href={infoLink} target="_blank">
                <img src={ imageLinks !== undefined ? imageLinks.thumbnail :missingpic }
                alt={title} className="book-text" />
                <div className="book-text">{ title }</div>
              </a>
            );
          })
        }
      </div>
    );
  }
}
export default Books;