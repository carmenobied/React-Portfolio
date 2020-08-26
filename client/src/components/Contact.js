import React, { Component } from 'react'; 

class Contact extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Want to collaborate? Feel free to reach out!
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>LinkedIn:
                  {resumeData.linkedinId}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}

export default Contact;