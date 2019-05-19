import glamorous from "glamorous-native";
import React from "react";
import { Text } from "react-native-paper";

import GlobalState from "@src/GlobalState";

/** ========================================================================
 * Types
 * =========================================================================
 */

interface Args {
  setToastMessage: (message: string) => void;
}

type ComponentProp = (args: Args) => JSX.Element;

interface IProps {
  Component: ComponentProp;
}

/** ========================================================================
 * React Class
 * =========================================================================
 */

class ToastProvider extends React.Component<IProps, {}> {
  render(): JSX.Element {
    const { Component, ...rest } = this.props;
    return (
      <GlobalState.Consumer>
        {value => (
          <Component {...rest} setToastMessage={value.setToastMessage} />
        )}
      </GlobalState.Consumer>
    );
  }
}

const CustomToast = ({
  message,
  close,
}: {
  message: string;
  close: () => void;
}) => {
  if (!message) {
    return null;
  }

  return (
    <BarContainer onPress={close}>
      <Bar>
        <ToastText>{message}</ToastText>
      </Bar>
    </BarContainer>
  );
};

/** ========================================================================
 * Helpers & Styles
 * =========================================================================
 */

const BarContainer = glamorous.touchableOpacity({
  zIndex: 25,
  marginTop: 42,
  width: "100%",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
});

const Bar = glamorous.view({
  width: "90%",
  borderRadius: 3,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(45,45,45,0.91)",
});

const ToastText = glamorous.text({
  color: "white",
  fontSize: 18,
  margin: 10,
});

/** ========================================================================
 * Export
 * =========================================================================
 */

export { CustomToast };

export default ToastProvider;
