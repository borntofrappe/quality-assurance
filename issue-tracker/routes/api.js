"use strict";

module.exports = function (app) {
  const projects = [
    {
      name: "apitest",
      issues: [
        {
          assigned_to: "borntofrappe",
          status_text: "in progress",
          open: false,
          _id: "7850679728413206",
          issue_title: "App routes",
          issue_text: "Handle app routes in routes/api.js",
          created_by: "borntofrappe",
          created_on: "2022-01-07T14:53:38.336Z",
          updated_on: "2022-01-07T14:53:38.336Z",
        },
        {
          assigned_to: "",
          status_text: "",
          open: true,
          _id: "6796582370362223",
          issue_title: "App documentation",
          issue_text:
            "Explain the scope of the application and the possible routes",
          created_by: "replit",
          created_on: "2022-01-07T14:54:50.265Z",
          updated_on: "2022-01-07T14:54:50.265Z",
        },
      ],
    },
  ];

  app
    .route("/api/issues/:project")
    .get(function (req, res) {
      let { issues } = projects.find((d) => d.name === req.params.project);

      const {
        assigned_to,
        status_text,
        open,
        _id,
        issue_title,
        issue_text,
        created_by,
        created_on,
        updated_on,
      } = req.query;

      if (assigned_to) {
        issues = issues.filter((d) => d.assigned_to === assigned_to);
      }
      if (status_text) {
        issues = issues.filter((d) => d.status_text === status_text);
      }
      if (open) {
        issues = issues.filter((d) => d.open === open);
      }
      if (_id) {
        issues = issues.filter((d) => d._id === _id);
      }
      if (issue_title) {
        issues = issues.filter((d) => d.issue_title === issue_title);
      }
      if (issue_text) {
        issues = issues.filter((d) => d.issue_text === issue_text);
      }
      if (created_by) {
        issues = issues.filter((d) => d.created_by === created_by);
      }
      if (created_on) {
        issues = issues.filter((d) => d.created_on === created_on);
      }
      if (updated_on) {
        issues = issues.filter((d) => d.updated_on === updated_on);
      }

      res.json(issues);
    })

    .post(function (req, res) {
      const project = projects.find((d) => d.name === req.params.project);

      const { issue_title, issue_text, created_by } = req.body;

      if (![issue_title, issue_text, created_by].every((d) => d)) {
        return res.json({ error: "required field(s) missing" });
      }

      const assigned_to = req.body.assigned_to || "";
      const status_text = req.body.status_text || "";

      const created_on = new Date();
      const open = true;

      const _id = Math.random().toString().slice(2);

      const issue = {
        assigned_to,
        status_text,
        open,
        _id,
        issue_title,
        issue_text,
        created_by,
        created_on,
        updated_on: created_on,
      };

      project.issues.push(issue);
      res.json(issue);
    })

    .put(function (req, res) {
      const { _id } = req.body;

      if (!_id) {
        return res.json({ error: "no update field(s) sent", _id: _id });
      }

      const { issues } = projects.find((d) => d.name === req.params.project);
      const issue = issues.find((d) => d._id === _id);

      const {
        issue_title,
        issue_text,
        created_by,
        assigned_to,
        status_text,
        open,
      } = req.body;

      try {
        Object.entries({
          issue_title,
          issue_text,
          created_by,
          assigned_to,
          status_text,
        }).forEach(([key, value]) => {
          if (value) {
            issue[key] = value;
          }
        });

        if (open) {
          issue.open = false;
        }
      } catch (error) {
        return res.json({ error: "could not update", _id });
      }

      res.json({ result: "successfully updated", _id });
    })

    .delete(function (req, res) {
      const { _id } = req.body;

      if (!_id) {
        return res.json({ error: "missing _id" });
      }

      const project = projects.find((d) => d.name === req.params.project);
      const index = project.issues.findIndex((d) => d._id === _id);

      if (index === -1) {
        return res.json({ error: "could not delete", _id });
      }

      project.issues = [
        ...project.issues.slice(0, index),
        ...project.issues.slice(index + 1),
      ];

      res.json({ result: "successfully deleted", _id });
    });
};
