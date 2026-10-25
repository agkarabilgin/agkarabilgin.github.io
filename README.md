# Ali Gokhan Karabilgin — personal website

Ready for GitHub Pages at https://agkarabilgin.github.io/.

GitHub username: `agkarabilgin`
Repository name: `agkarabilgin.github.io`
Package revision: 25 October 2026, v7

No code edits, installations or build commands are needed to publish this package. The old username has been removed from these instructions, the draft noindex restriction has been removed, and robots.txt allows search-engine crawling. Search-engine listing is not immediate or guaranteed.

## 1. Choose repository privacy

GitHub Free can publish this site from a public repository. A personal account needs GitHub Pro to publish it from a private repository.

If you want the repository private, use GitHub Pro and select Private. The published website will still be public. Its HTML, CSS, JavaScript, photo and CV remain accessible to visitors; a private repository hides the repository and its commit history, not the files served by the website.

## 2. Open or create the repository

If you have already created it, open https://github.com/agkarabilgin/agkarabilgin.github.io and continue to step 3. There is no need to recreate it.

Otherwise, sign in as agkarabilgin, click the + menu at the top right of GitHub, then New repository. Use:

| Setting | Value |
| --- | --- |
| Owner | agkarabilgin |
| Repository name | agkarabilgin.github.io |
| Description | Personal website of Ali Gokhan Karabilgin |
| Visibility | Private with GitHub Pro; Public with GitHub Free |
| Add README | On |
| Add .gitignore | No .gitignore |
| Add license | No license |

Click Create repository. If an existing repository is private and GitHub asks you to upgrade under Settings > Pages, GitHub Pro is needed to retain that privacy while publishing here.

## 3. Extract and upload this package

1. Download this v7 ZIP and extract it to a new folder on your computer. On Windows, right-click it and select Extract All.
2. Open the extracted ali-website folder. You should see index.html, assets, files, robots.txt, README.md and .nojekyll.
3. Open your repository's Code tab. Make sure the selected branch is main.
4. Select Add file > Upload files. If the repository is completely empty, select the uploading an existing file link instead.
5. Drag all the contents INSIDE ali-website into the upload area together, including the assets and files folders. The ZIP itself and the enclosing ali-website folder are not the upload targets.
6. Wait for the upload list. It should include index.html, assets/style.css, assets/theme.js, assets/site.js, assets/portrait.png, assets/favicon.svg and files/Ali_Karabilgin_CV.pdf.
7. Enter Prepare website for publication as the commit message, choose Commit directly to the main branch if shown, then click Commit changes.

Uploading the same paths replaces earlier copies. The supplied README can replace GitHub's initial README. If you have already replaced the CV with your final version, keep that PDF instead of uploading the temporary PDF from this package.

At the repository's top level you should see:

- index.html
- assets/ (folder)
- files/ (folder)
- robots.txt
- README.md
- .nojekyll

The index.html file must appear directly in the repository, not inside an ali-website folder. To find .nojekyll on your computer, enable hidden files if needed. If it is missing after upload, choose Add file > Create new file on GitHub, name the file .nojekyll, leave it empty and commit it to main.

## 4. Enable GitHub Pages

1. Open the repository's Settings tab.
2. Select Pages in the left sidebar, under Code and automation.
3. Under Build and deployment, set Source to Deploy from a branch.
4. Select Branch: main and Folder: /(root).
5. Click Save.
6. Leave Custom domain blank because you are using the github.io address.

## 5. Open the published website

Allow up to 10 minutes for the first deployment. Settings > Pages will display the published address and a Visit site button. The Actions tab shows deployment progress or errors.

Your public address is https://agkarabilgin.github.io/.

Check the portrait, research summaries, Dark mode / Light mode button, working-paper link and CV download. GitHub's github.io address supports HTTPS; retain Enforce HTTPS when shown.

## 6. Replace the CV later

1. Rename the final PDF exactly Ali_Karabilgin_CV.pdf.
2. In GitHub, open this repository and then its files folder.
3. Select Add file > Upload files, upload the replacement PDF and commit directly to main.
4. Allow a few minutes for publication, then check the download again. Both CV buttons use this same PDF; no HTML edit is required.

This package still includes the temporary CV PDF, as agreed.

## Troubleshooting

- A request to upgrade in Settings > Pages: a private repository on GitHub Free cannot publish with Pages. Use GitHub Pro if keeping the repository private is required.
- 404 after deployment: confirm the repository name is agkarabilgin.github.io, Pages uses main and /(root), and index.html is at the top level. Check the Actions tab for a successful deployment.
- A repository containing only a ZIP: extract it on your computer and upload the contents as in step 3.
- An ali-website folder at the repository's top level: repeat step 3 with that folder's contents so index.html sits at the top level.
- Old content after a successful update: wait a few minutes, then use Ctrl+F5 or a private browser window.
- New site not yet in Google: the files now allow crawling, but search engines decide when to discover and list it.

## Future content and design updates

- Edit index.html to update text or links.
- Replace assets/portrait.png to change the photo. Keep that filename to avoid editing HTML. The frame has a 6:7 width-to-height ratio; 600 x 700 px or 1200 x 1400 px fits it.
- Edit assets/style.css to change layout and colours.
- assets/theme.js controls the light/dark preference. The initial choice follows the visitor's device, then remembers a manual choice when browser storage is available. Print uses the light theme.
- Update the viva/award status and footer date when appropriate.
- The schooling working paper links to ResearchGate. Add links to the other papers when they are ready for public release.

## Official GitHub guidance

- Create a Pages site: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Upload files: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- Configure publication: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Revision notes

v7 updates the setup instructions for agkarabilgin, removes draft search-indexing restrictions and provides this complete publishing guide. The design, profile photo, dark mode, research, experience, education, teaching and downloadable CV are unchanged from v6. The older standalone v6 HTML remains a design preview; upload the files in this v7 package to publish.
