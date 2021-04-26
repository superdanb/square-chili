import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionPricing extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let background = _.get(section, 'background', null) || 'none';
        return (
            <section id={_.get(section, 'section_id', null)} className={'block pricing-block bg-' + background + ' outer'}>
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
              {_.get(section, 'pricing_plans', null) && (
              <div className="inner">
                <div className="grid">
                  {_.map(_.get(section, 'pricing_plans', null), (plan, plan_idx) => (
                  <div key={plan_idx} className="cell plan">
                    <div className="card">
                      {_.get(plan, 'title', null) && (
                      <div className="plan-header">
                        <h3 className="plan-title">{_.get(plan, 'title', null)}</h3>
                      </div>
                      )}
                      <div className="plan-content">
                        {_.get(plan, 'subtitle', null) && (
                        <div className="plan-subtitle">{_.get(plan, 'subtitle', null)}</div>
                        )}
                        {_.get(plan, 'price', null) && (
                        <div className="plan-price">{_.get(plan, 'price', null)}</div>
                        )}
                        {_.get(plan, 'details', null) && (
                        <div className="plan-copy">
                          {markdownify(_.get(plan, 'details', null))}
                        </div>
                        )}
                      </div>
                      {_.get(plan, 'actions', null) && (
                        <div className="plan-footer block-buttons">
                          <CtaButtons {...this.props} actions={_.get(plan, 'actions', null)} />
                        </div>
                      )}
                    </div>
                  </div>
                  ))}
                </div>
              </div>
              )}
            </section>
        );
    }
}
