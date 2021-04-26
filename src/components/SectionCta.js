import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionCta extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let background = _.get(section, 'background', null) || 'none';
        return (
            <section id={_.get(section, 'section_id', null)} className={'block cta-block bg-' + background + ' outer'}>
              <div className="inner-medium">
                <div className="block-content">
                  {_.get(section, 'title', null) && (
                    <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                  )}
                  {_.get(section, 'subtitle', null) && (
                    <p className="block-copy">
                      {htmlToReact(_.get(section, 'subtitle', null))}
                    </p>
                  )}
                </div>
                {_.get(section, 'actions', null) && (
                  <div className="block-buttons">
                    <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
                  </div>
                )}
              </div>
            </section>
        );
    }
}
