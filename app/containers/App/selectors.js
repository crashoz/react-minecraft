import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const selectAppDomain = (state) => state.get('app');

const makeSelectConnected = () => createSelector(
  selectAppDomain,
  (appState) => appState.get('isConnected')
);

const makeSelectRole = () => createSelector(
  selectAppDomain,
  (appState) => appState.get('role')
);

const makeSelectLoading = () => createSelector(
  selectAppDomain,
  (appState) => appState.get('isLoading')
);

const makeSelectServers = () => createSelector(
  selectAppDomain,
  (appState) => appState.get('servers')
);

const selectServerSlug = () => (state, ownProps) => ownProps.match.params.slug;

const makeSelectServer = () => createSelector(
  makeSelectServers(),
  selectServerSlug(),
  (servers, slug) => servers ? servers.get(slug) : null
);

const makeSelectConsole = () => createSelector(
  makeSelectServer(),
  (server) => server ? server.get('console') : null
);

const makeSelectRunning = () => createSelector(
  makeSelectServer(),
  (server) => server ? server.get('running') : null
);

const makeSelectApp = () => createSelector(
  selectAppDomain,
  (substate) => substate.toJS()
);

export default makeSelectApp;
export {
  makeSelectLocation,
  makeSelectConnected,
  makeSelectRole,
  makeSelectApp,
  makeSelectLoading,
  makeSelectServers,
  makeSelectBungee,
  makeSelectServer,
  makeSelectConsole,
  makeSelectRunning,
};
