import React, { useMemo, useEffect, useCallback, useState, Children, isValidElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Tab from './Tab';
import Button from '../Button';

const RoundedButton = styled(Button)`
  border-radius: 999px;
  padding-left: 1.75em;
  padding-right: 1.75em;

  &.--active {

  }
`;

const Wrapper = styled.div``;

const SwitchWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const Tabs = ({ className, children, defaultActiveTab, onChange }) => {
  const [flagTabs, _setFlagTabs] = useState({});
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const setFlagTabs = useCallback((key, val) => _setFlagTabs(prev => ({ ...prev, [key]: val })), [_setFlagTabs]);

  useEffect(() => {
    onChange(activeTab);
  }, [activeTab]);

  return (
    <Wrapper className={className}>
      <SwitchWrapper className="mb-5">
        {Children.map(children, (elm) => {
          if (!isValidElement(elm)) {
            return null;
          }

          return (
            <RoundedButton
              className={
                cn('__tab-button', {
                  '--active': elm.props.tab === activeTab,
                  '--disable': elm.props.disabled,
                })
              }
              transparent={elm.props.tab !== activeTab}
              disabled={elm.props.disabled}
              onClick={() => setActiveTab(elm.props.tab)}
            >
              {elm.props.title}
            </RoundedButton>
          );
        })}
      </SwitchWrapper>
      {Children.map(children, (elm) => {
        if (!isValidElement(elm)) {
          return null;
        }

        if (activeTab === elm.props.tab) {
          return React.cloneElement(elm, {
            active: true,
          });
        }

        return null;
      })}
    </Wrapper>
  );
};

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
