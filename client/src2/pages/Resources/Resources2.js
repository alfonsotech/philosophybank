import React, { Component, Fragment } from "react"
import request from "superagent"

class Resources extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      resources:[]
    };

    window.onscroll = () => {
      const {
        loadResources,
        state: {
          error,
          isLoading,
          hasMore,
        },
      } = this;

      if (error || isLoading || !hasMore) return;

        // Checks that the page has scrolled to the bottom
        if (
          window.innerHeight + document.documentElement.scrollTop
          === document.documentElement.offsetHeight
        ) {
          loadResources();
        }
      };
  }

  componentDidMount = () => {
    this.loadResources();
  }

//https://student-example-api.herokuapp.com/v1/contacts.json
  loadResources = () => {
      this.setState({ isLoading: true }, () => {
        request
        .get("/api/resources?results=10")
        .then((results) => {
          console.log('results.body', results.body);
            // Creates a massaged array of resource data
            const nextResources = results.body.map(resource => ({
              url: resource.url,
              title: resource.title
            }));

            // Merges the next resources into our existing resources
            this.setState({
              // Note: Depending on the API you're using, this value may be
              // returned as part of the payload to indicate that there is no
              // additional data to be loaded
              hasMore: (this.state.resources.length < 100),
              isLoading: false,
              resources: [
                ...this.state.resources,
                ...nextResources,
              ],
            });
          })
          .catch((err) => {
            this.setState({
              error: err.message,
              isLoading: false,
             });
          })
      });
    }



  // loadResources = () => {
  //   axios.get("/api/resources")
  //   .then(data => {
  //     console.log('data', data);
  //     this.setState({
  //       resources: data.data
  //     })
  //
  //   })
  //   .catch(err => console.log(err))
  // }

  render() {

    const {
     error,
     hasMore,
     isLoading,
     resources,
   } = this.state;

    return(
      <div>
              <h1>Infinite Resources!</h1>
              <p>Scroll down to load more!!</p>
              {resources.map(resource => (
                <Fragment key={resource.url}>
                  <hr />
                  <div style={{ display: 'flex' }}>
                    <img
                      alt=""
                      src={`https://via.placeholder.com/150

C/O https://placeholder.com/`}
                      style={{
                        borderRadius: '50%',
                        height: 72,
                        marginRight: 20,
                        width: 72,
                      }}
                    />
                    <div>
                      <h2 style={{ marginTop: 0 }}>
                        @{resource.title}
                      </h2>
                      <p>Title: {resource.title}</p>

                    </div>
                  </div>
                </Fragment>
              ))}
              <hr />
              {error &&
                <div style={{ color: '#900' }}>
                  {error}
                </div>
              }
              {isLoading &&
                <div>Loading...</div>
              }
              {!hasMore &&
                <div>You did it! You reached the end!</div>
              }
            </div>
    );
  }
}

export default Resources
