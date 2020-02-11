import { Injectable } from '@angular/core';
import { Repository } from '../models/repository';
import { RepoSummary } from '../models/repo-summary';

@Injectable()
export class SummaryService {
    public getSummary(repos: Repository[]): RepoSummary {
        let issuesTemp = 0;
        let sizeTemp = 0;
        let forksTemp = 0;
        let repoSummary: RepoSummary;

        repos.forEach(repo => {
            issuesTemp = issuesTemp + repo.open_issues;
            sizeTemp = sizeTemp + repo.size;
            forksTemp = forksTemp + repo.forks;
        });

        repoSummary = {
            openIssues: issuesTemp,
            size: sizeTemp,
            forks: forksTemp
        };

        return repoSummary;
    }
}
