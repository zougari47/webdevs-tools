## 1. Fork this repository

Fork this repository by clicking on the fork button <a href="https://github.com/zougari47/webdevs-tools"><img src="https://i.imgur.com/G4z1kEe.png" height="21" width="21"></a>

## 2. Clone the repository

Now clone the forked repository to your machine.

- Go to your GitHub account
- Open the forked repository
- Click on the `code` button and then click the copy to clipboard icon.
- Open a terminal and run the following git command:

```
git clone url_you_just_copied
```

## 3. Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd webdevs-tools
```

Now create a new branch with the site name you want to add

```
git checkout -b your-branch-name
```

## 4. Add a site

Start by creating a new JSON file in the data folder with the name of the site `example.io.json`

Fill it like below

```json
{
  "name": "example",
  "url": "https://example.io",
  "keywords": ["Key1", "Key2"],
  "description": "Description of the example site."
}
```

- For the name just type domain name without the extension
- For the description, you can get it from the head
  ```html
  <meta name="description" content="description to copy" />
  ```

You can also fix a broken link or a typo

## 5. Commit and push changes

Use the following commands

```
git add data/your_file.json
```

```
git commit -m "add siteName"
```

```
git push origin -u your-branch-name
```

Now go to the repository in GitHub & click the button `Compare & pull request`
