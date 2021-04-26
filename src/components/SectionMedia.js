import React from 'react';
import _ from 'lodash';

import {htmlToReact, withPrefix, markdownify} from '../utils';

export default class SectionMedia extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let background = _.get(section, 'background', null) || 'none';
        return (
            <section id={_.get(section, 'section_id', null)} className={'block media-block bg-' + _.get(section, 'background', null) + ' outer'}>
              <div className="inner">
                {_.get(section, 'title', null) && (
                  <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                )}
                {(_.get(section, 'image', null) || _.get(section, 'video_embed_html', null)) && (
                  <div className="block-preview">
                    {_.get(section, 'video_embed_html', null) ? (
                      htmlToReact(_.get(section, 'video_embed_html', null))
                    ) : 
                      <img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} />
                    }
                  </div>
                )}
                {_.get(section, 'caption', null) && (
                  <div className="block-copy inner-medium">
                    {markdownify(_.get(section, 'caption', null))}
                  </div>
                )}
              </div>
            </section>
        );
    }
}
