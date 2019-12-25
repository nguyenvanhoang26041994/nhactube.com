import React, { useMemo, useEffect, useCallback, useState, Children, isValidElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Tab from './Tab';
import Button from '../Button';

const TabButton = styled(Button)`
  padding-left: 1.75em;
  padding-right: 1.75em;
`;

const Wrapper = styled.div``;

const SwitchWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.defaultActiveTab,
    };
    this.flagTabs = {};
  }

  componentDidMount() {
    this.props.onChange(this.state.activeTab);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeTab !== this.state.activeTab) {
      this.props.onChange(this.state.activeTab);
    }
  }

  render() {
    const { className, children } = this.props;
    const { activeTab } = this.state;

    return (
      <Wrapper className={className}>
        <SwitchWrapper className="mb-5">
          {Children.map(children, (elm) => {
            if (!isValidElement(elm)) {
              return null;
            }

            return (
              <TabButton
                rounded
                className={
                  cn('__tab-button', {
                    '--active': elm.props.tab === activeTab,
                    '--disable': elm.props.disabled,
                  })
                }
                transparent={elm.props.tab !== activeTab}
                disabled={elm.props.disabled}
                onClick={() => this.setState({ activeTab: elm.props.tab })}
              >
                {elm.props.title}
              </TabButton>
            );
          })}
        </SwitchWrapper>
        {Children.map(children, (elm) => {
          if (!isValidElement(elm)) {
            return null;
          }

          if (activeTab !== elm.props.tab) {
            return this.flagTabs[elm.props.tab] && !elm.props.refresh
              ? elm
              : null;
          }

          if (activeTab === elm.props.tab) {
            this.flagTabs[elm.props.tab] = true;
            return React.cloneElement(elm, {
              active: true,
            });
          }

          return null;
        })}
      </Wrapper>
    );
  }
}

Tabs.Tab = Tab;

Tabs.displayName = 'Tabs';
Tabs.propTypes = {
  className: PropTypes.string,
  defaultActiveTab: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.any, // Tab or array Tab
};
Tabs.defaultProps = {
  onChange: f => f,
};

export default Tabs;
