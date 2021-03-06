import React, { useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import { useSelector, useDispatch } from "react-redux";
import { getLogs } from "../../actions/logActions";

function Logs() {
  const dispatch = useDispatch();
  const log = useSelector((state) => state.log);

  const { logs } = log;

  useEffect(() => {
    dispatch(getLogs());
    // eslint-disable-next-line
  }, []);

  if (logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
}

export default Logs;
