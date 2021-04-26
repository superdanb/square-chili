import React from 'react';
import _ from 'lodash';

import {htmlToReact, withPrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionGrid extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let background = _.get(section, 'background', null) || 'none';
        let columns = _.get(section, 'columns', null) || 'two';
        return (
            <section id={_.get(section, 'section_id', null)} className={'block grid-block bg-' + background + ' outer'}>
              {(_.get(section, 'title', null) || _.get(section, 'subtitle', null)) && (
                <div className="block-header inner-medium">
                  {_.get(section, 'title', null) && (
                  <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                  )}
                  {_.get(section, 'subtitle', null) && (
                  <p className="block-subtitle">
                    {htmlToReact(_.get(section, 'subtitle', null))}
                  </p>
                  )}
                </div>
              )}
              <div className="inner">
                <div className={'grid grid-col-' + columns}>
                  {_.map(_.get(section, 'items', null), (item, item_idx) => (
                    <div key={item_idx} className="cell grid-item">
                      {_.get(item, 'image', null) && (
                        <div className="grid-item-preview">
                          <img src={withPrefix(_.get(item, 'image', null))} alt={_.get(item, 'image_alt', null)} />
                        </div>
                      )}
                      <div className="grid-item-content">
                        {_.get(item, 'title', null) && (
                          <h3 className="grid-item-title">{_.get(item, 'title', null)}</h3>
                        )}
                        {_.get(item, 'content', null) && (
                          <div className="grid-item-copy">
                            {markdownify(_.get(item, 'content', null))}
                          </div>
                        )}
                        {_.get(item, 'actions', null) && (
                          <div className="grid-item-buttons">
                            <CtaButtons {...this.props} actions={_.get(item, 'actions', null)} />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
        );
    }
}
