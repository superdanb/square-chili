import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify} from '../utils';

export default class SectionFaq extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let background = _.get(section, 'background', null) || 'none';
        return (
            <section id={_.get(section, 'section_id', null)} className={'block faq-block bg-' + _.get(section, 'background', null) + ' outer'}>
              <div className="inner">
                <div className="block-header">
                  {_.get(section, 'title', null) && (
                  <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                  )}
                  {_.get(section, 'subtitle', null) && (
                  <p className="block-subtitle">
                    {htmlToReact(_.get(section, 'subtitle', null))}
                  </p>
                  )}
                </div>
                {_.get(section, 'faq_items', null) && (
                <div className="faq-items grid">
                  {_.map(_.get(section, 'faq_items', null), (faqitem, faqitem_idx) => (
                    <div key={faqitem_idx} className="faq-item cell">
                      <h3 className="faq-question">{_.get(faqitem, 'question', null)}</h3>
                      <div className="faq-answer">
                        {markdownify(_.get(faqitem, 'answer', null))}
                      </div>
                    </div>
                  ))}
                </div>
                )}
              </div>
            </section>
        );
    }
}
