Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
});

Router.route('/', {name: 'rankingsList'});
Router.route('report_loss', {name: 'reportLoss'});
