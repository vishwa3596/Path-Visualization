// writing dijkstra algorithm  in c++;
const int INF = 1e9+5;
#include<bits/stdc++.h>
using namespace std;
int main(){
    int n, e;
    vector<vector<pair<int,int>>>adj;
    vector<int>dist(n+1);
    vector<bool>visited(n+1);
    cout << "enter the no of node and edges " << endl;
    cin >> n >> e;
    for(int i=0; i<e; i++){
        int u, v, w;
        cin >> u >> v >> w;
        adj[u].push_back(make_pair(v,w));
        adj[v].push_back(make_pair(u,w));
    }
    priority_queue<pair<int, int>>q;
    for(int i=0; i<n; i++){
        dist[i] = INF;
    }
    dist[0] = 0;
    q.push(make_pair(0, dist[0]));
    while(!q.empty()){
        int vertex = q.top().first;
        q.pop();
        if(visited[vertex]){
            continue;
        }
        visited[vertex] = true;
        for(auto u: adj[vertex]){
            int sec_vertex = u.first;
            int sec_weight = u.second;
            if(dist[vertex]+sec_weight < dist[sec_vertex]){
                dist[sec_vertex] = dist[vertex]+sec_weight;
            }
            q.push(make_pair(sec_vertex, dist[sec_vertex]));
        }
    }
    cout << dist[n-1];
    return 0;
}