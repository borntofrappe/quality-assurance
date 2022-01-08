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

      Object.entries({
        assigned_to,
        status_text,
        open,
        _id,
        issue_title,
        issue_text,
        created_by,
        created_on,
        updated_on,
      })
        .filter(([, value]) => value !== undefined)
        .forEach(([key, value]) => {
          issues = issues.filter((d) => d[key].toString() === value);
        });

      res.json(issues);
    })

    .post(function (req, res) {
      let project = projects.find((d) => d.name === req.params.project);

      if (!project) {
        project = {
          name: req.params.project,
          issues: [],
        };

        projects.push(project);
      }

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
        return res.json({ error: "missing _id" });
      }

      const {
        issue_title,
        issue_text,
        created_by,
        assigned_to,
        status_text,
        open,
      } = req.body;

      const entries = Object.entries({
        issue_title,
        issue_text,
        created_by,
        assigned_to,
        status_text,
      }).filter(([, value]) => value !== undefined);

      if (entries.length === 0 && open === undefined) {
        return res.json({ error: "no update field(s) sent", _id });
      }

      const { issues } = projects.find((d) => d.name === req.params.project);
      const issue = issues.find((d) => d._id === _id);

      if (!issue) {
        return res.json({ error: "could not update", _id });
      }

      entries.forEach(([key, value]) => {
        issue[key] = value;
      });

      if (open) {
        issue.open = false;
      }

      issue.updated_on = new Date();

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
